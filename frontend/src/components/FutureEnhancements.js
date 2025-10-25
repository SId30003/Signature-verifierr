export default function FutureEnhancements() {
  const enhancements = [
    "Real-time signature verification during signing process",
    "Multi-signature batch processing capabilities",
    "Integration with digital signature pads and tablets",
    "Advanced anomaly detection for sophisticated forgery techniques",
    "Mobile application for on-the-go verification",
  ];

  return (
    <section className="mb-10">
      <div className="glass-strong rounded-2xl p-8 glow-hover">
        <h2 className="text-2xl font-bold mb-4 text-[#EDEDED]">
          Future Enhancements
        </h2>
        <ul className="space-y-3 text-[#EDEDED]/80 text-base">
          {enhancements.map((enhancement, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#EDEDED] mt-1">•</span>
              <span>{enhancement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
