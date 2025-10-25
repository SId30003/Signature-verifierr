export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="glass-strong rounded-2xl p-8 glow">
      <h2 className="text-2xl font-bold mb-6 text-[#EDEDED]">
        Analysis Results
      </h2>

      {result.error ? (
        <div className="glass border border-red-500/30 rounded-xl p-6">
          <p className="text-red-400 text-center font-medium text-lg">
            {result.error}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-center">
            <div
              className={`px-8 py-4 rounded-2xl glass-strong border-2 glow ${
                result.prediction === "Authentic"
                  ? "border-green-500/50"
                  : "border-red-500/50"
              }`}
            >
              <p className="text-3xl font-bold text-center">
                {result.prediction || "Unknown"}
              </p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="glass rounded-xl p-6 border border-[#EDEDED]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-semibold text-[#EDEDED]">
                Confidence Level
              </span>
              <span className="text-xl font-bold text-[#EDEDED]">
                {result.confidence ? `${result.confidence.toFixed(2)}%` : "N/A"}
              </span>
            </div>
            <div className="w-full bg-[#EDEDED]/10 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  result.prediction === "Authentic"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${result.confidence || 0}%` }}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-5 border border-[#EDEDED]/10">
              <p className="text-[#EDEDED]/60 text-xs mb-2">Status</p>
              <p className="text-lg font-bold text-[#EDEDED]">
                {result.prediction || "Unknown"}
              </p>
            </div>
            <div className="glass rounded-xl p-5 border border-[#EDEDED]/10">
              <p className="text-[#EDEDED]/60 text-xs mb-2">Model</p>
              <p className="text-lg font-bold text-[#EDEDED]">SVM (RBF)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
