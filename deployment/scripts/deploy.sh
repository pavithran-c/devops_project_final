#!/bin/bash
set -e

REGISTRY=pavithran-c
TAG=${1:-latest}

echo "Pushing images to Docker registry..."
docker push $REGISTRY/frontend:$TAG
docker push $REGISTRY/user:$TAG
docker push $REGISTRY/vehicle:$TAG
docker push $REGISTRY/appointment:$TAG

echo "Deploying frontend with Helm..."
helm upgrade --install frontend deployment/helm/frontend --set image.repository=$REGISTRY/frontend --set image.tag=$TAG

echo "Deploying user microservice with Helm..."
helm upgrade --install user deployment/helm/user --set image.repository=$REGISTRY/user --set image.tag=$TAG

echo "Deploying vehicle microservice with Helm..."
helm upgrade --install vehicle deployment/helm/vehicle --set image.repository=$REGISTRY/vehicle --set image.tag=$TAG

echo "Deploying appointment microservice with Helm..."
helm upgrade --install appointment deployment/helm/appointment --set image.repository=$REGISTRY/appointment --set image.tag=$TAG