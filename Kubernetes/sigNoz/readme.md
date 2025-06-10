# SigNoz is an open-source Datadog or New Relic alternative. Get APM, logs, traces, metrics, exceptions, & alerts in a single tool.

Signoz configuration

```bash
global:
  storageClass: "gp2"

clickhouse:
  installCustomStorageClass: true
```

SigNoz Installing in observer namespace

```bash
helm install signoz signoz/signoz \
   --namespace observer --create-namespace \
   --wait \
   --timeout 1h \
   -f values.yaml
```

