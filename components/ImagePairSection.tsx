// src/components/common/ImagePairSection.tsx

import React from 'react';
import Image from 'next/image';

interface ImagePairSectionProps {
  leftImage: {
    url: string;
    alt: string;
  };
  rightImage: {
    url: string;
    alt: string;
  };
  heightClass?: string; // 可选高度 class，自定义高度用
}

const ImagePairSection: React.FC<ImagePairSectionProps> = ({
  leftImage,
  rightImage,
  heightClass = 'h-[200px]', // 默认高度
}) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row gap-4 ${heightClass}`}>
      {/* 左图 */}
      <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden h-full">
        <Image
          src={leftImage.url}
          alt={leftImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* 右图 */}
      <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden h-full">
        <Image
          src={rightImage.url}
          alt={rightImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ImagePairSection;