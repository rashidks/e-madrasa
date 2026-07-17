from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Madrasa LMS API",
    description="Backend API for the Madrasa learning platform (Web + Android + iPhone)",
    version="1.0.0",
    openapi_tags=[
        {"name": "Health", "description": "Application health endpoints"},
    ],
)

# Allow the React web app (and later, the mobile app's webview) to call this API.
# In production, replace "*" with your actual frontend domain(s) for security.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
def root():
    return {"message": "Madrasa LMS API is running"}


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok"}