"use client";

import { useRef, useState, useEffect } from "react";
import UploadImageGroup from "./UploadImageGroup";
import ImageExtraInfoForm, { ExtraInfo } from "./ImageExtraInfoForm";
import StartAnalysisButton from "./StartAnalysisButton";
import AnalysisResult from "./AnalysisResult";
import { Button } from "@heroui/react";

// ✅ 将文件转换为 base64
const convertFilesToBase64 = async (files: File[]): Promise<string[]> => {
  const base64Files = await Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    )
  );
  return base64Files;
};

// ✅ 判断是否今天已经使用过
function hasUsedToday(): boolean {
  const lastUsed = localStorage.getItem('fengshui_used_at');
  if (!lastUsed) return false;

  const lastDate = new Date(lastUsed);
  const today = new Date();

  return (
    lastDate.getFullYear() === today.getFullYear() &&
    lastDate.getMonth() === today.getMonth() &&
    lastDate.getDate() === today.getDate()
  );
}

// ✅ 设置今天使用过
function setUsedToday() {
  localStorage.setItem('fengshui_used_at', new Date().toISOString());
}

export default function FengshuiClient() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [extraInfo, setExtraInfo] = useState<ExtraInfo>({
    mode: "room",
    notes: "",
  });

  // 👉 ref 用于滚动定位按钮
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cachedResult = sessionStorage.getItem('fengshui_result');
    const cachedInfo = sessionStorage.getItem('fengshui_extra_info');
    const cachedImages = sessionStorage.getItem('fengshui_images');
  
    if (cachedResult) {
      setResult(cachedResult);
      setShowResult(true); // 自动展示
    }
  
    if (cachedInfo) {
      try {
        setExtraInfo(JSON.parse(cachedInfo));
      } catch (e) {
        console.error("Failed to parse cached extra info", e);
      }
    }
  
    if (cachedImages) {
      try {
        const base64List: string[] = JSON.parse(cachedImages);
        // 把 base64 转换成 File
        const files = base64List.map((base64, idx) => {
          const byteString = atob(base64.split(',')[1]);
          const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          const blob = new Blob([ab], { type: mimeString });
          return new File([blob], `image-${idx + 1}.png`, { type: mimeString });
        });
        setSelectedImages(files);
      } catch (e) {
        console.error("Failed to parse cached images", e);
      }
    }
  }, []);

  const scrollToWithOffset = (element: HTMLElement, offset = 100) => {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  
  const handleUserSubmit = async () => {
    if (hasUsedToday()) {
      alert('You can only analyze once per day. Please come back tomorrow.');
      return;
    }
  
    if (buttonRef.current) scrollToWithOffset(buttonRef.current, 100);
  
    if (selectedImages.length === 0) {
      alert("Please upload at least one image before starting the analysis.");
      return;
    }
  
    setIsLoading(true);
    setError(null);
    setShowResult(false);
    setResult(null);
  
    try {
      const base64Images = await convertFilesToBase64(selectedImages);
  
      // ✅ 判断请求模式
      const isFloorPlan = extraInfo.mode === 'floorplan';
  
      const endpoint = isFloorPlan
        ? '/api/fengshui-analysis/floor-plan'
        : '/api/fengshui-analysis/room-layout';
  
      // ✅ 保留 images 字段结构不变
      const payload = isFloorPlan
        ? { images: base64Images, info: extraInfo }
        : { images: base64Images, info: { notes: extraInfo.notes } };
  
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch analysis result. Please try again.");
      }
  
      const data = await response.json();
      setResult(data.result);
      setUsedToday();
  
      // ✅ 缓存
      sessionStorage.setItem('fengshui_result', data.result);
      sessionStorage.setItem('fengshui_extra_info', JSON.stringify(extraInfo));
      sessionStorage.setItem('fengshui_images', JSON.stringify(base64Images));
    } catch (err: unknown) {
      console.error("Analysis error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full text-start flex flex-col gap-4">
      <UploadImageGroup value={selectedImages} onChange={setSelectedImages} />
      <ImageExtraInfoForm value={extraInfo} onChange={setExtraInfo} />

      {/* Start Analysis Button */}
      <div ref={buttonRef}>
        <StartAnalysisButton onClick={handleUserSubmit} isLoading={isLoading} />
      </div>

      {/* ✅ 错误提示 */}
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm w-fit">
          <p className="mb-2">⚠️ {error}</p>
          <Button onPress={handleUserSubmit} color="danger" variant="flat" size="sm">
            Retry
          </Button>
        </div>
      )}

      {/* Result ready indicator */}
      {result && !showResult && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-default-500">Your analysis result is ready.</p>
          <Button onPress={() => setShowResult(true)} className="w-fit">
            Show Analysis Result
          </Button>
        </div>
      )}

      {/* Result */}
      {showResult && result && <AnalysisResult result={result} />}
    </div>
  );
}