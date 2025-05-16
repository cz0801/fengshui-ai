'use client';

import { Card, Button } from '@heroui/react';
import { CopyIcon, SuccessIcon } from '../Icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { useState } from 'react';

export default function AnalysisResult({ result }: { result: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">🧠 Feng Shui Analysis Result</h3>
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={handleCopy}
          isIconOnly={true}
        >
          {copied ? <SuccessIcon /> : <CopyIcon />}
        </Button>
      </div>

      <div className="prose max-w-none dark:prose-invert text-base leading-relaxed">
        <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSlug]}>
          {result}
        </ReactMarkdown>
      </div>
    </Card>
  );
}