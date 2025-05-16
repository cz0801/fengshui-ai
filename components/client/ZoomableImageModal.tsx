// ZoomableImageModal.tsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Portal({ children }: { children: React.ReactNode }) {
  // 在 Next.js 或 CRA，你可以检测一下浏览器环境后再 createPortal
  return typeof window !== "undefined"
    ? ReactDOM.createPortal(children, document.body)
    : null;
}

interface ZoomableImageModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function ZoomableImageModal({
  open,
  onClose,
  imageUrl,
}: ZoomableImageModalProps) {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setScale(1); // 每次关闭时重置缩放
    }
  }, [open]);

  // 如果不需要滚轮禁止默认滚动，可以不写 e.preventDefault()。
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.1, 5));
    } else {
      setScale((prev) => Math.max(prev - 0.1, 0.5));
    }
  };

  if (!open) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
        onClick={onClose}
      >
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
          ref={containerRef}
        >
          <img
            src={imageUrl}
            alt="Zoomable modal"
            onWheel={handleWheel}
            style={{ transform: `scale(${scale})` }}
            className="transform transition-transform origin-center max-h-[80vh] max-w-[80vw]"
          />
        </div>
      </div>
    </Portal>
  );
}