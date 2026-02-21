# Backend (FastAPI)

This folder contains the FastAPI backend service.

## Setup

1. Create and activate a virtual environment.
2. Install dependencies:
   `pip install -r requirements.txt`
3. Run the API:
   `uvicorn app.main:app --reload`

## Endpoints

- `GET /` - basic service message
- `GET /health` - health check
