"use client";

export default function ImageUpload({
  onImageSelect,
  previewUrl,
  onAnalyze,
  onReset,
  isLoading,
}) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="glass-strong rounded-2xl p-8 mb-8 glow-hover">
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-4 text-[#EDEDED]">
          Upload Signature Image
        </label>

        {!previewUrl ? (
          <div className="border-2 border-dashed border-[#EDEDED]/20 rounded-xl p-12 text-center hover:border-[#EDEDED]/40 transition-all cursor-pointer glass">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <svg
                  className="w-16 h-16 text-[#EDEDED]/50 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-[#EDEDED] text-lg font-medium mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-[#EDEDED]/60 text-sm">
                  PNG, JPG, JPEG up to 10MB
                </p>
              </div>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="glass border border-[#EDEDED]/10 rounded-xl p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto object-contain rounded"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={onAnalyze}
                disabled={isLoading}
                className="flex-1 bg-[#EDEDED] text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#EDEDED]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  "Analyze Signature"
                )}
              </button>
              <button
                onClick={onReset}
                className="px-6 py-3 glass border border-[#EDEDED]/20 rounded-lg hover:border-[#EDEDED]/40 transition-all font-semibold"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
