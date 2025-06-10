# Ingress-NGINX Deployment Guide

This guide explains how to deploy the [Ingress-NGINX Controller](https://kubernetes.github.io/ingress-nginx/) in your Kubernetes cluster.

---

## Prerequisites

- A running Kubernetes cluster in EKS
- `kubectl` configured to point to your cluster

---

## Installation

To install the Ingress-NGINX controller, apply the official deployment manifest:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.3/deploy/static/provider/cloud/deploy.yaml
```

This command will:

- Create the necessary namespace, service account, roles, and role bindings
- Deploy the Ingress-NGINX controller and supporting resources

---

## Verification

Check that the controller pods are running:

```bash
kubectl get pods -n ingress-nginx
```

You should see one or more pods with `STATUS` as `Running`.

---

## Accessing the Ingress Controller

- For cloud providers, a LoadBalancer service is typically created. To find the external IP:

```bash
kubectl get services -n ingress-nginx
```
- Look for the `ingress-nginx-controller` service and use its `EXTERNAL-IP`.

---

## Reference

- [Ingress-NGINX Official Documentation](https://kubernetes.github.io/ingress-nginx/deploy/)