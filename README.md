# Bookish - Book Recommendation Web App

[![CI/CD Pipeline](https://github.com/amalsboui/BookDev/actions/workflows/Workflow.yml/badge.svg)](https://github.com/amalsboui/BookDev/actions/workflows/Workflow.yml)
[![Frontend Docker Image Version](https://img.shields.io/badge/frontend-latest-blue?logo=docker)](https://hub.docker.com/r/hophopp/bookdev-frontend/tags)
[![Backend Docker Image Version](https://img.shields.io/badge/backend-latest-blue?logo=docker)](https://hub.docker.com/r/hophopp/bookdev-backend/tags)

A modern book recommendation platform powered by Google Books API, built with a microservices architecture and DevOps best practices.


## 📚 Features

- Browse curated book recommendations
- Search books using Google Books API
- Containerized with Docker
- Unit & integration testing
- CI/CD Pipeline with GitHub Actions
- Kubernetes deployment with Minikube


### Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: React.js with Tailwind CSS, built using Vite
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube)
- **Web Server**: Nginx (Production)
- **CI/CD**: GitHub Actions
- **Container Registry**: DockerHub
- **Testing**: 
  - Backend: Python unit tests
  - Frontend: ESLint
 
## 🧭 Architecture Diagram

<img src="https://github.com/amalsboui/BookDev/blob/main/architecture.png" width="600">


## 🚀 Getting Started

### Prerequisites

- Docker
- Minikube
- kubectl
- Git

### Local Development Setup

1. **Clone the repository**
2. **Start Minikube**
3. **Apply Kubernetes configurations**
4. **Access the application**

The application should be accessible at the URL specified in your ingress configuration.

## 🐳 Docker Configuration

The project uses Docker to containerize both the frontend and backend services:

### Backend Dockerfile

The backend Dockerfile uses a Python 3.9 image, installs dependencies from requirements.txt, and exposes port 7001.

### Frontend Dockerfile

The frontend uses a multi-stage build with Node.js for building the React application and Nginx for serving the static files.

## ☸️ Kubernetes Configuration

The application leverages Kubernetes for orchestration with several key benefits:

- **High Availability**: Multiple replicas ensure the application remains available with no downtime
- **Load Balancing**: Automatic traffic distribution among pods using Services and Ingress
- **Self-Healing**: Failed containers automatically restart, maintaining stability
- **Centralized Management**: All resources defined as code and managed in a dedicated namespace
- **Scalability**: Ready for cloud deployment with horizontal scaling capabilities

While developed and tested on Minikube, the Kubernetes configurations are designed to be easily deployed to cloud providers like AWS EKS, Google GKE, or Azure AKS with minimal changes.

Below are the key components:

- **Namespace**: Dedicated namespace for the Bookish application
- **Deployments**: Separate deployments for frontend and backend
- **Services**: ClusterIP services for internal communication
- **Ingress**: Exposes the frontend to external traffic


## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and continuous deployment:

1. **Continuous Integration**:
   - Runs tests on each pull request and push to the main branch
   - Validates code quality using ESLint for frontend

2. **Continuous Deployment**:
   - On successful merge to main branch:
     - Builds Docker images
     - Pushes images to DockerHub

## 📋 Project Structure

- **.github/workflows/**: CI/CD pipeline configurations
- **backend/**: Flask application with tests and Dockerfile
- **frontend/**: React application with Vite, Tailwind, and Nginx configuration
- **kubernetes/**: Kubernetes manifests for deployments, services, and ingress
- **README.md**: Project documentation
- **docker-compose.yaml**: Development environment setup

