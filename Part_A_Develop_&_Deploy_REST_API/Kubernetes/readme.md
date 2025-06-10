# Kubernetes (EKS) Setup Guide

This guide walks you through the steps to set up and connect to an Amazon EKS (Elastic Kubernetes Service) cluster using the AWS CLI.

---

## Step 1: Install, Configure AWS CLI and Connect with EKS cluster

### 1.1: Install AWS CLI

- Follow the official AWS documentation to install the AWS CLI:  
  [Install AWS CLI – Official Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### 1.2: Configure AWS CLI

After installation, configure your AWS credentials:

```bash
aws configure
```

You will be prompted to enter:
- **AWS Access Key ID**
- **AWS Secret Access Key**
- **Default region name** (e.g., `ap-south-1`)
- **Default output format** (optional, e.g., `json`)

*Once configured, your CLI is ready to interact with AWS resources.*

---

### 1.3: Connect to the EKS Cluster

Update your Kubernetes `kubeconfig` to connect to your EKS cluster:

```bash
aws eks --region <region> update-kubeconfig --name <cluster-name> --profile <profile>
```

**Replace the placeholders:**
- `<region>`: Your AWS region (e.g., `ap-south-1`)
- `<cluster-name>`: The name of your EKS cluster (e.g., `weather-forecast-eks`)
- `<profile>`: (Optional) The AWS CLI profile you wish to use (e.g., `arn`). Omit if using the default profile.

**Example:**
```bash
aws eks --region ap-south-1 update-kubeconfig --name weather-forecast-eks --profile arnob
```

---

### 1.5: Verify the Connection

After updating your `kubeconfig`, verify your access to the cluster:

```bash
kubectl get nodes
```

You should see the list of worker nodes in your EKS cluster.

## Step 2: Deploy ingress (load Balancer)

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.12.3/deploy/static/provider/cloud/deploy.yaml
```

For Details see [Ingress Documation](ingress/readme.md)

## Step 3: Deploy weather forcast api

```bash
kubectl apply -f weather_forecast_api/deployment.yml
```

NOTE: `WEATHER_API_KEY` key not workable. given a sample key


## Step 4: 

---

## Notes

- Ensure you have [kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured.
- Your IAM user must have permissions to access EKS and the target cluster.

---

## References

- [Amazon EKS Documentation](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [AWS CLI EKS Command Reference](https://docs.aws.amazon.com/cli/latest/reference/eks/)