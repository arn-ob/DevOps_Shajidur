# Kubernetes (K8s) Setup Steps for EKS

## Step 1: Install and Configure AWS CLI

### 1.1 Install AWS CLI

Follow the official AWS documentation to install the AWS CLI:  
🔗 [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### 1.2 Configure AWS CLI

After installation, configure the AWS CLI with your credentials:

```bash
aws configure
```

Provide the following when prompted:

- Access Key ID
- Secret Access Key
- Default region name
- Default output format (optional)

Once configured, you are connected to AWS through the CLI.

Step 2: Connect to the EKS Cluster
Use the following command to update your kubeconfig and connect to your EKS cluster:

```bash
aws eks --region ap-south-1 update-kubeconfig --name weather-forecast-eks --profile arn
```

Replace the placeholders:

ap-south-1 with your AWS region (if different)

weather-forecast-eks with your EKS cluster name

arn with your configured AWS CLI profile (if using one)
