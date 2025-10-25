from app.schema.analysis_model import AnalysisRequest, AnalysisResponse
import time, base64, io
import numpy as np
from PIL import Image
from src.features import extract_features
from src.preprocess import preprocess_image
from app.models.ml_model import model
import cv2


async def analyze_signature(req: AnalysisRequest) -> AnalysisResponse:
    start = time.time()

    image_data = base64.b64decode(req.image.split(",")[-1])
    img = Image.open(io.BytesIO(image_data)).convert("L")  

    img = np.array(img)
    cv2.imwrite("temp_input.png", img)  

    processed = preprocess_image("temp_input.png")      
    features = extract_features(processed).reshape(1, -1)

    confidence = float(model.predict_proba(features)[0][1])
    label = "Genuine" if confidence > 0.5 else "Forged"

    return AnalysisResponse(
        prediction = label,
        confidence = round(confidence * 100, 2),
        processing_time = round(time.time() - start, 3),
        model_used="SVC Pipeline"
    )