GitHub
  ↓
Jenkins
  → Jenkins automatically starts the pipeline
  ↓
Docker Image
  → Jenkins builds Docker images for microservices
  ↓
Docker Hub
  → Docker images are pushed to DockerHub for version control and accessibility
  ↓
Helm
  → Jenkins triggers deployment using Helm charts for Kubernetes
  ↓
Access App via Localhost/Ingress
  → Service is exposed (e.g., via NodePort/Ingress) and accessible through a browser
  ↓
Web Browser (User Access)
  → User accesses and interacts with the running microservices application