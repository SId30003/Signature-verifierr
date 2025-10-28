"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import ResultDisplay from "@/components/ResultDisplay";
import { axiosInstance } from "@/lib/axios";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    try {
      const arrayBuffer = await selectedImage.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const response = await axiosInstance.post(
        "v1/analyze",
        {
          image: buffer.toString("base64"),
          filename: selectedImage.name,
          mimetype: selectedImage.type,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing signature:", error);
      setResult({
        error:
          error.response?.data?.detail ||
          "Failed to analyze signature. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
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
              Upload a signature image and our ML model will determine if it is
              authentic or forged with confidence analysis
            </p>
          </div>
          <ImageUpload
            onImageSelect={handleImageSelect}
            previewUrl={previewUrl}
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