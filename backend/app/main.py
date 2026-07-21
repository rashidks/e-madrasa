from fastapi import FastAPI
from sqlalchemy import text

from app.database import engine

app = FastAPI(
    title="E-Madrasa API",
    version="1.0.0",
)


@app.get("/")
def home():
    return {"message": "E-Madrasa Backend Running"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.get("/db-test")
def db_test():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "success": True,
            "message": "Database Connected Successfully",
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e),
        }