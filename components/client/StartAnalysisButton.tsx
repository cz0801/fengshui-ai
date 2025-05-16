'use client';

import { useState } from 'react';
import { Button, Spinner } from '@heroui/react';
import { HouseIcon } from '../Icons';

export default function StartAnalysis({
  onClick,
  isLoading,
}: {
  onClick: () => Promise<void>; // 支持异步
  isLoading: boolean;
}) {
  const [loading, setLoading] = useState(isLoading);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick(); // 触发父组件的分析逻辑
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-start">
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3 text-center w-full">
          <Spinner size="lg" color="primary" variant="wave" />
          <p className="text-sm text-default-500 animate-pulse">AI is analyzing your floor plan...</p>
          <p className="text-sm text-default-500 animate-pulse">It may take about 20~30 seconds</p>
        </div>
      ) : (
        <Button
          color="primary"
          onPress={handleClick}
          startContent={<HouseIcon />}
          className="w-fit"
        >
          Start Analysis
        </Button>
      )}
    </div>
  );
}