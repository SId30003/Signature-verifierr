export default function ProjectOverview() {
  return (
    <section className="mb-10">
      <div className="glass-strong rounded-2xl p-8 glow-hover">
        <h2 className="text-2xl font-bold mb-4 text-[#EDEDED]">
          Project Overview
        </h2>
        <p className="text-[#EDEDED]/80 text-base leading-relaxed mb-4">
          Our Signature Authentication System leverages advanced machine
          learning algorithms including SVM, Logistic Regression, and Decision
          Trees to detect forged signatures with high accuracy. This project
          addresses the critical need for automated signature verification in
          banking, legal, and administrative sectors where document authenticity
          is paramount.
        </p>
        <p className="text-[#EDEDED]/80 text-base leading-relaxed">
          The system analyzes extracted features from signature images through a
          sophisticated preprocessing pipeline, applying PCA for dimensionality
          reduction and standardization techniques to determine authenticity
          with confidence scores.
        </p>
      </div>
    </section>
  );
}
