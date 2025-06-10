# E-Commerce DevOps Project

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture Diagram](#architecture-diagram)
3. [REST API](#rest-api)
4. [Dockerization](#dockerization)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Infrastructure as Code (Terraform)](#infrastructure-as-code-terraform)
7. [Kubernetes Manifests](#kubernetes-manifests)
8. [Setup Instructions](#setup-instructions)
9. [Design & Reasoning](#design--reasoning)
10. [Thank you](#thank-you)

---

## Project Overview

This project demonstrates a scalable, cloud-native e-commerce application, focusing on modern DevOps best practices:

- **REST API** for weather forecast functionality.
- **Docker** for containerization.
- **CI/CD** for automated build, and deployment to eks cluster.
- **Terraform** for cloud infrastructure provisioning.
- **Kubernetes** for Kubernetes manifest files.

---

## Architecture Diagram

![Cloud Architecture Diagram](Part_B_System_Architecture_Design/image/architecture-diagram.jpg)

*The architecture supports horizontal scaling, high availability, and automated deployment to Kubernetes clusters.*

---

## REST API

The backend is implemented using Node.js/Express. 

### Main Endpoints

| Endpoint          | Method | Description                 |
|-------------------|--------|-----------------------------|
| `/forecast/:city` | GET    | Selected city forecast      |
| `/hello`          | GET    | Get dhaka forecast details  |
| `/health`         | GET    | Health Check Endpoint       |

See [API Documentation](Part_A_Develop_&_Deploy_REST_API/weather-forecast-api/docs/api.md)

---

## Dockerization

The application is containerized using Docker for consistency across environments. Also given docker compose build and development purpose

**Key Dockerfile elements:**
- Node.js Alpine image for a smaller images
- Non-root user for security

See [Dockerfile](Part_A_Develop_&_Deploy_REST_API/weather-forecast-api/Dockerfile).

See [Docker Compose](Part_A_Develop_&_Deploy_REST_API/weather-forecast-api/docker-compose.yml).

---

## CI/CD Pipeline

Continuous Integration and Deployment is managed via GitHub Actions.

- **Build:** Build Docker image on each push.
- **Deploy:** On merge to `main`, deploy to Kubernetes via `kubectl`.

See [CI/CD config](Part_A_Develop_&_Deploy_REST_API/weather-forecast-api/.github/workflows/publish.yml) for the pipeline definition.

---

## Infrastructure as Code (Terraform)

Terraform scripts provision:

- Managed Kubernetes Cluster
- VPC, Subnets, Route Table (Public and Private), EKS
- IAM roles and service accounts

See [Terraform](Part_A_Develop_&_Deploy_REST_API/terraform/) directory.

---

## Kubernetes Manifests

Kubernetes YAMLs for:

- nignx deployments
- ingress deployment
- sigNoz deployment
- weather forecast API deployment

See [Kubernetes YAMLs and ReadME](Part_A_Develop_&_Deploy_REST_API/Kubernetes) directory.

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-devops.git
   cd ecommerce-devops
   ```
2. **Build Docker image**
   ```bash
   docker build -t ecommerce-app .
   ```
3. **Run locally**
   ```bash
   docker run -p 8080:8080 ecommerce-app
   ```
4. **Provision Cloud Infrastructure**
   ```bash
   cd infra/terraform
   terraform init
   terraform apply
   ```
5. **Deploy to Kubernetes**
   ```bash
   kubectl apply -f k8s/
   ```
6. **Access Application**
   - Use the LoadBalancer/Ingress URL printed after deployment.

---

## Design & Reasoning

- **Microservices-ready:** Modular codebase for future decomposition.
- **Cloud-native:** Uses managed services and infrastructure-as-code for reproducibility.
- **Security:** Follows least-privilege in IAM, uses secrets for sensitive data.
- **Scalability:** Kubernetes enables auto-scaling and rolling deployments.
- **Observability:** Logs and metrics exposed for monitoring.

---

## Thank You