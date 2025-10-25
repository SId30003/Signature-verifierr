import joblib
from pathlib import Path

try:
    BASE_DIR = Path(__file__).resolve().parent.parent
except NameError:
    BASE_DIR = Path.cwd()

MODEL_PATH = BASE_DIR / "model.joblib"
model = joblib.load(MODEL_PATH)