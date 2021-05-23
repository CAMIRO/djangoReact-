# Lead Manager

> Full stack Django/React/Redux app that uses token based authentication with Knox.

## Start Docker

```bash
# star-stop container
docker-compose up / down

# Run Django app
docker exec -it django bash

# Run DB (Postgres)
docker exec -it postgres psql -U postgres
```

## Run project

```bash
# Install dependencies
npm install

# Serve API on localhost:8000
python leadmanager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```
