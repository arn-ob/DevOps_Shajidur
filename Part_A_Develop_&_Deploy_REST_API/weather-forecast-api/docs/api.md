# Weather Forecast API – Documentation

Welcome to the **Weather Forecast API**, a Node.js RESTful service listening on port `3000`. This document describes the available endpoints, expected responses, and usage examples.

---

## Base URL

```
http://localhost:3000
```

---

## Endpoints

### 1. Root Endpoint

- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message or serves as a basic health check.

**Example Request:**
```bash
curl http://localhost:3000/
```

**Sample Response:**
```json
{
  "message": "Welcome to the Weather Data API"
}
```

---

### 2. Health Check

- **URL:** `/api/health`
- **Method:** `GET`
- **Description:** Checks the health/status of the API.

**Example Request:**
```bash
curl http://localhost:3000/api/health
```

**Sample Response:**
```json
{
  "status": "ok",
  "message": "WeatherAPI is healthy"
}
```

---

### 3. Hello Endpoint

- **URL:** `/api/hello`
- **Method:** `GET`
- **Description:** Returns server identification, build version, current date-time, and sample weather data.

**Example Request:**
```bash
curl http://localhost:3000/api/hello
```

**Sample Response:**
```json
{
  "hostname": "k8s_weather_server",
  "datetime": "2506101017",
  "version": "1.2.3",
  "weather": {
    "dhaka": {
      "temperature": 33.2,
      "temp_unit": "c"
    }
  }
}
```

**Response Properties:**
- `hostname`: Name of the server or container.
- `datetime`: Current server date and time (format: YYMMDDHHmm).
- `version`: Application version.
- `weather`: Example weather data (city, temperature, unit).

---

## Notes

- All endpoints use the HTTP `GET` method.
- The API is designed to be Kubernetes-ready and can be extended for additional cities or weather data endpoints.
- Ensure the server is running on the correct port (`3000` by default).

---
