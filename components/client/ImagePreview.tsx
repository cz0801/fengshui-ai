'use client';

import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';
import { XIcon } from '../Icons';

export default function ImagePreview({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  const [src, setSrc] = useState<string>('');

  // 生成 base64 预览
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const result = evt.target?.result;
      if (typeof result === 'string') setSrc(result);
    };
    reader.readAsDataURL(file);

    // 清理
    return () => {
      setSrc('');
    };
  }, [file]);

  return (
    <div className="relative w-full border border-default-200 rounded overflow-hidden">
      {src && (
        <img
          src={src}
          alt={file.name}
          className="w-full h-[260px] object-cover"
          loading="lazy"
        />
      )}

      {/* 删除按钮 */}
      <Button
        size="sm"
        color="default"
        variant="solid"
        isIconOnly
        radius="full"
        onPress={onRemove}
        className="absolute top-0 right-0 z-10"
      >
        <XIcon />
      </Button>
    </div>
  );
}