# DevOps Challenge: API Development, Deployment & System Architecture

Has Two part, those are 

- Develop & Deploy a REST API
- System Architecture Design

## Develop & Deploy a REST API

### 🧩 Project Overview

This project demonstrates a complete DevOps workflow for a REST API application, including:

- ✅ A RESTful API built with Node.js
- 🐳 Docker for containerization
- 🚀 GitHub Actions for CI/CD
- ☁️ Terraform for provisioning Kubernetes infrastructure by using AWS
- ⚙️ Kubernetes YAMLs for deployment
- System architecture design/diagram

All those has seperate documentation. 


## Part A - File Structure

```plaintext
Part A: Develop & Deploy a REST API/
├── Kubernetes
│   ├── readme.md
│   ├── ingress
│   │   └── readme.md
│   ├── nginx
│   │   └── deployment.yml
│   ├── sigNoz
│   │   ├── readme.md
│   │   └── values.yaml
│   └── weather_forecast_api
│       ├── deployment.yml
│       ├── images
│       │   ├── api-health.png
│       │   └── api-hello.png
│       └── readme.md
├── terraform
│   ├── main.tf
│   ├── modules
│   │   ├── eks
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   └── variables.tf
│   │   └── vpc
│   │       ├── main.tf
│   │       ├── outputs.tf
│   │       └── variables.tf
│   ├── outputs.tf
│   ├── readmd.md
│   ├── terraform.tfstate
│   ├── terraform.tfstate.backup
│   └── variables.tf
└── weather-forecast-api
    ├── _test_
    │   ├── health.test.js
    │   └── hello.test.js
    ├── docker-compose.yml
    ├── Dockerfile
    ├── http
    │   ├── api_health.http
    │   └── api_hello.http
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   └── api.js
    └── server.js
```

## Part B - File Structure

Part B: System Architecture Design/
├── image
│   └── diagram.jpg
└── readme.md

