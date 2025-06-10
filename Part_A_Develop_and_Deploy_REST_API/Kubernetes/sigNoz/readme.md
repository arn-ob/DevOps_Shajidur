# SigNoz Setup & Configuration

[SigNoz](https://signoz.io/) is an open-source observability platform that provides APM, logs, traces, metrics, exceptions, and alerts—all in a single tool. It's a robust alternative to commercial solutions like Datadog and New Relic.

---

## Prerequisites

- A running Kubernetes cluster (e.g., EKS, GKE, or AKS)
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/) and [`helm`](https://helm.sh/) installed
- Proper permissions to create namespaces, install Helm charts, and manage IAM/service accounts

---

## Configuration

Customize your `values.yaml` file for storage and ClickHouse setup:

```yaml
global:
  storageClass: "gp2"

clickhouse:
  installCustomStorageClass: true
```

- **global.storageClass:** Storage class for persistent volumes (e.g., `gp2` for AWS EBS).
- **clickhouse.installCustomStorageClass:** Set to `true` to enable a custom storage class for ClickHouse.

---

## Installation

Install SigNoz into the `observer` namespace using Helm:

```bash
helm repo add signoz https://charts.signoz.io
helm repo update

helm install signoz signoz/signoz \
  --namespace observer --create-namespace \
  --wait \
  --timeout 1h \
  -f values.yaml
```

#### Steps:

1. **Add the SigNoz Helm repository** (if not already done).
2. **Update your Helm chart repo index.**
3. **Save your custom configuration as `values.yaml`.**
4. **Install SigNoz using the above command.**

---

## Troubleshooting: Storage Class & EBS CSI Driver (EKS)

If persistent volumes (PVCs) are not being created due to storage class issues on EKS, ensure the EBS CSI driver and IAM permissions are properly configured:

```bash
eksctl utils associate-iam-oidc-provider --region=ap-south-1 --cluster=weather-forecast-eks --profile=arnob --approve

eksctl create iamserviceaccount --profile arnob \
  --region ap-south-1 \
  --name ebs-csi-controller-sa \
  --namespace kube-system \
  --cluster weather-forecast-eks \
  --attach-policy-arn arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy \
  --approve \
  --role-only \
  --role-name AmazonEKS_EBS_CSI_DriverRole

eksctl create addon --name aws-ebs-csi-driver --profile arnob --region ap-south-1 \
  --cluster weather-forecast-eks \
  --service-account-role-arn arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):role/AmazonEKS_EBS_CSI_DriverRole \
  --force
```

**Tips:**
- Make sure to adjust `--region`, `--cluster`, and `--profile` to match your AWS environment.
- These steps associate the IAM OIDC provider, create the necessary IAM service account, and install the EBS CSI driver addon for EKS.

---

## Accessing the SigNoz Dashboard

After installation, access the SigNoz dashboard using port-forwarding:

```bash
kubectl port-forward svc/signoz-frontend 3301:3301 -n observer
```

Then open [http://localhost:3301](http://localhost:3301) in your browser.

---

## References

- [SigNoz Documentation](https://signoz.io/docs/)
- [SigNoz Helm Charts on ArtifactHub](https://artifacthub.io/packages/helm/signoz/signoz)
- [EBS CSI Driver on EKS](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html)