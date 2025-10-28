"use client";

export default function ImageUpload({
  onImageSelect,
  previewUrls,
  onAnalyze,
  onReset,
  isLoading,
}) {
  const handleFileChange = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file, imageType);
    }
  };

  const renderUploadBox = (imageType, label) => {
    const previewUrl = previewUrls?.[imageType];
    const uploadId = `file-upload-${imageType}`;

    return (
      <div className="flex-1">
        <label className="block text-lg font-semibold mb-4 text-[#EDEDED]">
          {label}
        </label>

        {!previewUrl ? (
          <div className="border-2 border-dashed border-[#EDEDED]/20 rounded-xl p-8 text-center hover:border-[#EDEDED]/40 transition-all cursor-pointer glass">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, imageType)}
              className="hidden"
              id={uploadId}
            />
            <label htmlFor={uploadId} className="cursor-pointer">
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-[#EDEDED]/50 mb-3"
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
                <p className="text-[#EDEDED] font-medium mb-1">
                  Click to upload
                </p>
                <p className="text-[#EDEDED]/60 text-sm">
                  PNG, JPG, JPEG
                </p>
              </div>
            </label>
          </div>
        ) : (
          <div className="glass border border-[#EDEDED]/10 rounded-xl p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt={`${label} Preview`}
              className="max-h-48 mx-auto object-contain rounded"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="glass-strong rounded-2xl p-8 mb-8 glow-hover">
      <div className="mb-6">
        <div className="flex gap-6 mb-6">
          {renderUploadBox("original", "Original Signature")}
          {renderUploadBox("current", "Current Signature")}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onAnalyze}
            disabled={isLoading || !previewUrls?.original || !previewUrls?.current}
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
                Comparing Signatures...
              </span>
            ) : (
              "Compare Signatures"
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
    </div>
  );
}