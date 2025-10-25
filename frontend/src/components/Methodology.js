export default function Methodology() {
  const performanceMetrics = [
    { metric: "ROC-AUC Score", value: "95.0%" },
    { metric: "Model", value: "SVM (RBF)" },
    { metric: "PCA Components", value: "95%" },
  ];

  const technologies = [
    {
      category: "Backend",
      tech: "FastAPI, Python, Scikit-learn, Joblib",
    },
    {
      category: "Frontend",
      tech: "Next.js 15, React, TailwindCSS",
    },
    {
      category: "ML Libraries",
      tech: "NumPy, Pandas, OpenCV, Matplotlib, Seaborn",
    },
    {
      category: "Model Training",
      tech: "Google Colab, Jupyter Notebook",
    },
  ];

  return (
    <section className="mb-10">
      <div className="glass-strong rounded-2xl p-8 glow-hover">
        <h2 className="text-2xl font-bold mb-6 text-[#EDEDED]">Methodology</h2>

        <div className="space-y-6">
          {/* Data Collection */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#EDEDED]">
              Data Collection
            </h3>
            <p className="text-[#EDEDED]/80 leading-relaxed text-base">
              The model was trained on a comprehensive dataset containing both
              genuine and forged signatures from multiple individuals. The
              dataset was split using stratified sampling (80% training, 20%
              testing) to ensure balanced class distribution and robust model
              generalization across different signature styles.
            </p>
          </div>

          {/* Model Architecture */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#EDEDED]">
              Model Architecture
            </h3>
            <div className="glass rounded-xl p-5 border border-[#EDEDED]/10">
              <ul className="space-y-2 text-[#EDEDED]/80 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#EDEDED] mt-1">•</span>
                  <span>
                    <strong>Algorithms:</strong> SVM (RBF kernel), Logistic
                    Regression, Decision Tree, SGD Classifier
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EDEDED] mt-1">•</span>
                  <span>
                    <strong>Framework:</strong> Scikit-learn with StandardScaler
                    and PCA pipeline
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EDEDED] mt-1">•</span>
                  <span>
                    <strong>Training:</strong> Supervised learning with
                    stratified train-test split and class balancing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EDEDED] mt-1">•</span>
                  <span>
                    <strong>Optimization:</strong> GridSearchCV with 3-fold
                    cross-validation for hyperparameter tuning (C, gamma)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EDEDED] mt-1">•</span>
                  <span>
                    <strong>Evaluation:</strong> ROC-AUC scoring, confusion
                    matrix, FAR/FRR/EER metrics
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#EDEDED]">
              Performance Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {performanceMetrics.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 border border-[#EDEDED]/10 text-center glow-hover"
                >
                  <p className="text-[#EDEDED]/60 text-xs mb-1">
                    {item.metric}
                  </p>
                  <p className="text-2xl font-bold text-[#EDEDED]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#EDEDED]">
              Technologies Used
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {technologies.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 border border-[#EDEDED]/10"
                >
                  <p className="text-[#EDEDED]/60 text-xs mb-1">
                    {item.category}
                  </p>
                  <p className="text-[#EDEDED] font-semibold text-sm">
                    {item.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
