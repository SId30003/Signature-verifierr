# Signature Verification System

A machine learning-based signature verification system that identifies whether a signature is genuine or forged by analyzing uploaded signature images.

## 📋 Project Overview

This project was developed as a 5th semester Machine Learning project. The system uses ML algorithms to authenticate signatures by comparing them against known genuine samples, trained on the CEDAR signature dataset.

## 🎯 Features

- **Signature Authentication**: Upload signature images to verify authenticity
- **Binary Classification**: Determines if a signature is genuine or forged
- **Multiple ML Models**: Ensemble approach using various classification algorithms
- **Real-time Analysis**: Quick processing and result generation
- **User-friendly Interface**: Clean and intuitive web interface
- **RESTful API**: Well-structured backend API for signature analysis

## 🛠️ Tech Stack

### Backend

- **Framework**: FastAPI (Python)
- **ML Models**:
  - Logistic Regression
  - Support Vector Machine (SVM with RBF kernel)
  - Decision Tree Classifier
  - Stochastic Gradient Descent (SGD) Classifier
- **Model Serialization**: Joblib
- **Core Libraries**:
  - scikit-learn for ML algorithms
  - FastAPI for API endpoints
  - CORS middleware for frontend integration

### Frontend

- **Framework**: Next.js
- **Styling**: CSS/Tailwind (based on globals.css)
- **Components**: React-based modular components
- **Features**: Image upload, result display, navigation

## 📁 Project Structure
```
project-root/
├── frontend/
│   ├── .next/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── app/
│       │   ├── about/
│       │   │   └── page.js
│       │   ├── team/
│       │   │   └── page.js
│       │   ├── globals.css
│       │   ├── layout.js
│       │   └── page.js
│       ├── components/
│       │   ├── Footer.js
│       │   ├── FutureEnhancements.js
│       │   ├── HowItWorks.js
│       │   ├── ImageUpload.js
│       │   ├── Methodology.js
│       │   ├── Navbar.js
│       │   ├── ProjectOverview.js
│       │   ├── ResultDisplay.js
│       │   └── TeamMemberCard.js
│       └── lib/
│           └── axios.js
│
└── backend/
    ├── app/
    │   ├── core/
    │   │   └── cors.py
    │   ├── models/
    │   │   └── ml_model.py
    │   ├── routers/
    │   │   └── analyze.py
    │   ├── schema/
    │   │   └── analysis_model.py
    │   ├── services/
    │   │   └── analyze_service.py
    │   └── main.py
    ├── src/
    │   ├── features.py
    │   └── preprocess.py
    ├── tests/
    │   └── .env
    ├── model.joblib
    ├── .gitignore
    └── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Run the backend server:
```bash
python -m app.main
```
The API will be available at http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
The application will be available at http://localhost:3000

## 📊 Model Training

### Dataset

The system was trained on the CEDAR Signature Dataset from Kaggle, which contains:
- Genuine signatures from multiple individuals
- Forged signatures for comparison
- High-quality signature images for robust training

### Machine Learning Models

We implemented and compared multiple classification algorithms:
```python
models = {
    "LogisticRegression": LogisticRegression(max_iter=2000, class_weight='balanced'),
    "SVM": SVC(kernel='rbf', probability=True, class_weight='balanced'),
    "DecisionTree": DecisionTreeClassifier(max_depth=10, class_weight='balanced'),
    "SGDClassifier": SGDClassifier(loss='log_loss', max_iter=1000, class_weight='balanced')
}
```

### Model Configuration

- **Logistic Regression**: Maximum 2000 iterations with balanced class weights
- **SVM**: RBF kernel with probability estimates and balanced class weights
- **Decision Tree**: Maximum depth of 10 with balanced class weights
- **SGD Classifier**: Log loss function with 1000 iterations and balanced class weights

### Training Process

1. **Data Collection**: CEDAR dataset from Kaggle
2. **Preprocessing**: Image normalization and feature extraction (src/preprocess.py)
3. **Feature Engineering**: Custom feature extraction pipeline (src/features.py)
4. **Model Training**: Trained using Google Colab for computational efficiency
5. **Model Evaluation**: Cross-validation and performance metrics comparison
6. **Model Selection**: Best performing model saved as model.joblib

## 🔍 How It Works

1. **Upload**: User uploads a signature image through the web interface
2. **Preprocessing**: Image is preprocessed and normalized
3. **Feature Extraction**: Key signature features are extracted
4. **Analysis**: ML model analyzes the signature features
5. **Classification**: System determines if signature is genuine or forged
6. **Results**: User receives authentication result with confidence score

## 📝 API Documentation

Once the backend is running, visit http://localhost:8000/docs for interactive API documentation powered by FastAPI's built-in Swagger UI.

### Main Endpoints

- **POST /analyze**: Upload and analyze signature image
- **GET /health**: Check API health status

## 📄 License

This project was developed for academic purposes as part of the 5th semester ML curriculum.

##  Acknowledgments

- Vikas Gupta Sir and Pravin Dwaramwar sir for their guidance
- CEDAR Dataset contributors for providing high-quality signature data
- Kaggle for hosting the dataset

## 📚 References

- CEDAR Signature Dataset: [Kaggle](https://www.kaggle.com/)
- FastAPI Documentation: https://fastapi.tiangolo.com/
- Next.js Documentation: https://nextjs.org/docs
- scikit-learn Documentation: https://scikit-learn.org/
