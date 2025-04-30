#!/bin/bash
set -e

REGISTRY=pavithranc
TAG=${1:-latest}

echo "Building frontend..."
docker build -t $REGISTRY/frontend:$TAG ./project

echo "Building user microservice..."
docker build -t $REGISTRY/user:$TAG "./Microservice Backend/Login"

echo "Building vehicle microservice..."
docker build -t $REGISTRY/vehicle:$TAG "./Microservice Backend/Vehicle"

echo "Building appointment microservice..."
docker build -t $REGISTRY/appointment:$TAG "./Microservice Backend/Appointment"