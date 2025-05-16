'use client';

import { useRef, useState } from 'react';
import { Button } from '@heroui/react';
import ImagePreview from './ImagePreview';
import { ImageIcon } from '../Icons';
import ZoomableImageModal from './ZoomableImageModal';

export default function UploadImageGroup({
  max = 3,
  value,
  onChange,
}: {
  /** 最多上传几张 */
  max?: number;
  /** 已选文件 */
  value: File[];
  /** 更新文件列表 */
  onChange: (files: File[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  /** 选择图片 */
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || []);
    e.target.value = ''; // 重置 input，方便连续选择
    if (picked.length === 0) return;

    const remain = max - value.length; // 还能选几张

    // 已达上限
    if (remain <= 0) {
      window.alert(`You can upload a maximum of ${max} images.`);
      return;
    }

    // 超出可选数量：截断并提示
    const filesToAdd = picked.slice(0, remain);
    if (picked.length > remain) {
      window.alert(`You can upload a maximum of ${remain} images.`);
    }

    onChange([...value, ...filesToAdd]);
  };

  /** 删除单张 */
  const handleRemove = (idx: number) => {
    onChange(value.filter((_, i) => i !== idx));
  };

  const handleImageClick = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* 选择按钮 */}
      <div className="w-full flex items-start flex-col gap-2">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleAddImage}
        />
        <Button
          color="primary"
          variant="flat"
          onPress={() => inputRef.current?.click()}
          startContent={<ImageIcon />}
        >
          Choose Image
        </Button>
        <p className='text-sm text-gray-500'>
          You may upload up to <strong>three floor plan images</strong>.<br />
          If they are from <strong>different floors</strong>, please 
          <strong> mark the floor number clearly</strong> on each image.
        </p>
      </div>

      {/* 预览网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {value.map((file, idx) => (
          <div key={idx} onClick={() => handleImageClick(file)} className="cursor-zoom-in">
            <ImagePreview file={file} onRemove={() => handleRemove(idx)} />
          </div>
        ))}
      </div>

      {/* 放大 Modal */}
      {previewUrl && (
        <ZoomableImageModal
          open={modalOpen}
          imageUrl={previewUrl}
          onClose={() => {
            setModalOpen(false);
            setPreviewUrl(null);
          }}
        />
      )}
    </div>
  );
}