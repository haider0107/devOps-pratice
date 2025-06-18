# 🚀 Fullstack Dockerized App with CI/CD & Monitoring

### Click to checkout project demo video 👇

[![Watch the video](https://img.youtube.com/vi/zu43f9Y2u4k/0.jpg)](https://www.youtube.com/watch?v=zu43f9Y2u4k&ab_channel=KushalBhargava)

This is a fullstack web application built with a modern tech stack, fully containerized with Docker Swarm. It features an optimized Dockerfile using multi-stage builds, robust CI/CD pipelines with GitHub Actions, and full monitoring through Prometheus, Grafana, and system exporters.

## 🧱 Tech Stack

- **Frontend:** React.js with Typescript
- **Backend:** Express.js with Typescript
- **Database:** MongoDB
- **Containerization:** Docker, Docker Swarm
- **Monitoring:** Prometheus, Grafana, cAdvisor, Node Exporter
- **CI/CD:** GitHub Actions, Docker Hub

## ⚙️ Features

### ✅ CI/CD Pipeline (GitHub Actions)

- **CI (Continuous Integration)**
    - Runs on pull requests to `main`
    - Executes build, test, and lint on both backend and frontend
    - Ensures code quality before merging
- **Protected Branch**
    - `main` branch is protected from direct push
    - Only pull requests with passing checks can be merged
- **CD (Continuous Deployment)**
    - Automatically updates the Docker Compose file with the new image tag
    - Uses a GitHub App to commit the updated Compose file to the `main` branch
    - Builds new images and pushes them to Docker Hub
    - Logs into the server and deploys the updated stack to Docker Swarm

## 📦 Docker Setup

- Multi-stage Dockerfile for optimized image sizes
- All services are containerized
- Reverse proxy setup for routing using Caddy

### 🐳 Services

- **Frontend** - Served via reverse proxy
- **Backend** - API endpoint
- **Reverse Proxy** - Handles HTTPS and domain routing
- **Monitoring Stack**
    - Prometheus for metrics collection
    - Grafana for visual dashboards
    - Node Exporter for host-level metrics
    - cAdvisor for container-level metrics

## 🔍 Monitoring Stack

Deployed alongside the app in Docker Swarm:

- Access Prometheus to explore metrics
- Access Grafana to view dashboards and set alerts
- Metrics collected from:
    - All running containers via cAdvisor
    - Host systems via Node Exporter
