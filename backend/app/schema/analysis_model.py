from pydantic import BaseModel
from typing import List, Dict, Optional

class AnalysisRequest(BaseModel):
    image: str
    filename: str
    mimetype: str

class AnalysisResponse(BaseModel):
    prediction:str
    confidence:float
    model_used:str
    processing_time:float