from fastapi import APIRouter
from app.schema.analysis_model import AnalysisResponse, AnalysisRequest
from app.services.analyze_service import analyze_signature

router = APIRouter(prefix="/v1", tags=["analyze"])

@router.post("/analyze", response_model=AnalysisResponse)
async def analyze(payload:AnalysisRequest)->AnalysisResponse:
    result = await analyze_signature(payload)
    print(result)
    return result