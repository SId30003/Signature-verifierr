"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import ResultDisplay from "@/components/ResultDisplay";
import { axiosInstance } from "@/lib/axios";

export default function Home() {
  const [selectedImages, setSelectedImages] = useState({
    original: null,
    current: null,
  });
  const [previewUrls, setPreviewUrls] = useState({
    original: null,
    current: null,
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (file, imageType) => {
    setSelectedImages((prev) => ({
      ...prev,
      [imageType]: file,
    }));
    setPreviewUrls((prev) => ({
      ...prev,
      [imageType]: URL.createObjectURL(file),
    }));
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImages.original || !selectedImages.current) return;

    setIsLoading(true);
    try {
      // Convert both images to base64
      const originalArrayBuffer = await selectedImages.original.arrayBuffer();
      const originalBuffer = Buffer.from(originalArrayBuffer);

      const currentArrayBuffer = await selectedImages.current.arrayBuffer();
      const currentBuffer = Buffer.from(currentArrayBuffer);

      const response = await axiosInstance.post(
        "v1/analyze",
        {
          originalImage: originalBuffer.toString("base64"),
          currentImage: currentBuffer.toString("base64"),
          originalFilename: selectedImages.original.name,
          currentFilename: selectedImages.current.name,
          originalMimetype: selectedImages.original.type,
          currentMimetype: selectedImages.current.type,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error comparing signatures:", error);
      setResult({
        error:
          error.response?.data?.detail ||
          "Failed to compare signatures. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    // Revoke object URLs to prevent memory leaks
    if (previewUrls.original) URL.revokeObjectURL(previewUrls.original);
    if (previewUrls.current) URL.revokeObjectURL(previewUrls.current);

    setSelectedImages({ original: null, current: null });
    setPreviewUrls({ original: null, current: null });
    setResult(null);
  };

  return (
    <div className="min-h-screen text-[#EDEDED]">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#EDEDED] tracking-tight">
              Signature Authentication System
            </h1>
            <p className="text-lg text-[#EDEDED]/70 max-w-2xl mx-auto leading-relaxed">
              Upload your original signature and current signature for
              comparison. Our ML model will analyze and determine if they match
              with confidence analysis
            </p>
          </div>
          <ImageUpload
            onImageSelect={handleImageSelect}
            previewUrls={previewUrls}
            onAnalyze={handleAnalyze}
            onReset={handleReset}
            isLoading={isLoading}
          />
          <ResultDisplay result={result} />
        </div>
      </div>
      <Footer />
    </div>
  );
}