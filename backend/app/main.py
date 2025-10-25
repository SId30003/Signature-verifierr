from fastapi import FastAPI
from app.core.cors import setup_cors
from app.core.config import settings
from app.routers import  analyze

app = FastAPI(title="Python API", version="0.1.0")
setup_cors(app, settings.ALLOWED_ORIGINS)

# app.include_router(analyze.router)

@app.get("/")
def root():
    return {"message": "Welcome"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=settings.PORT,
        reload=True,
    )
