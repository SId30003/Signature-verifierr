export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Image Preprocessing",
      description:
        "The uploaded signature image undergoes preprocessing including noise reduction, normalization, and enhancement to ensure optimal analysis quality.",
    },
    {
      step: "02",
      title: "Feature Extraction",
      description:
        "Custom feature extraction algorithms analyze key signature characteristics including geometric, statistical, and spatial features from the preprocessed images.",
    },
    {
      step: "03",
      title: "ML Model Analysis",
      description:
        "The ensemble of trained models (SVM with RBF kernel, Logistic Regression, Decision Trees) analyzes features through a pipeline with StandardScaler and PCA dimensionality reduction.",
    },
    {
      step: "04",
      title: "Result Generation",
      description:
        "The system generates a prediction with a confidence score, indicating whether the signature is authentic or forged based on the analysis.",
    },
  ];

  return (
    <section className="mb-10">
      <div className="glass-strong rounded-2xl p-8 glow-hover">
        <h2 className="text-2xl font-bold mb-6 text-[#EDEDED]">How It Works</h2>
        <div className="space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 glass rounded-xl p-6 border border-[#EDEDED]/10 hover:border-[#EDEDED]/20 transition-all"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 bg-[#EDEDED]/10 border border-[#EDEDED]/30 text-[#EDEDED] rounded-xl flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#EDEDED]">
                  {item.title}
                </h3>
                <p className="text-[#EDEDED]/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
