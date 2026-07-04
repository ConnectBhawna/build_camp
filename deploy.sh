#!/usr/bin/env bash

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-companies-e474c}"
REGION="${REGION:-europe-west1}"
REPOSITORY="${REPOSITORY:-buildweek}"
SERVICE_NAME="${SERVICE_NAME:-build-camp}"
IMAGE_NAME="${IMAGE_NAME:-build-camp}"
TAG="${TAG:-${GITHUB_SHA:-latest}}"
ENABLE_APIS="${ENABLE_APIS:-false}"
CLOUD_RUN_PORT="${CLOUD_RUN_PORT:-8080}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE_NAME}:${TAG}"

if [[ -z "${CLOUDSDK_CONFIG:-}" ]]; then
  if [[ -w "${HOME}/.config/gcloud" ]]; then
    export CLOUDSDK_CONFIG="${HOME}/.config/gcloud"
  else
    export CLOUDSDK_CONFIG="${TMPDIR:-/private/tmp}/codex-gcloud"
  fi
fi

mkdir -p "${CLOUDSDK_CONFIG}"

echo "Using project: ${PROJECT_ID}"
echo "Using region: ${REGION}"
echo "Using repository: ${REPOSITORY}"
echo "Using service: ${SERVICE_NAME}"
echo "Using image: ${IMAGE_URI}"
echo "Using Cloud Run port: ${CLOUD_RUN_PORT}"

cd "${ROOT_DIR}"

if [[ "${ENABLE_APIS}" == "true" ]]; then
  echo "Enabling required Google Cloud APIs..."
  gcloud services enable run.googleapis.com artifactregistry.googleapis.com --project="${PROJECT_ID}"
else
  echo "Skipping API enablement. Set ENABLE_APIS=true for first-time project setup."
fi

echo "Ensuring Artifact Registry repository exists..."
if ! gcloud artifacts repositories describe "${REPOSITORY}" \
  --location="${REGION}" \
  --project="${PROJECT_ID}" \
  >/dev/null 2>&1; then
  gcloud artifacts repositories create "${REPOSITORY}" \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Build Camp Docker images" \
    --project="${PROJECT_ID}" \
    --quiet
fi

echo "Configuring Docker auth for Artifact Registry..."
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

echo "Building image with Docker Buildx..."
docker buildx build \
  --platform=linux/amd64 \
  --provenance=false \
  --sbom=false \
  --load \
  -t "${IMAGE_URI}" \
  .

echo "Pushing image to Artifact Registry..."
docker push "${IMAGE_URI}"

echo "Deploying to Cloud Run..."
gcloud run deploy "${SERVICE_NAME}" \
  --project="${PROJECT_ID}" \
  --region="${REGION}" \
  --platform=managed \
  --image="${IMAGE_URI}" \
  --allow-unauthenticated \
  --port="${CLOUD_RUN_PORT}" \
  --quiet

echo "Deployment complete."
