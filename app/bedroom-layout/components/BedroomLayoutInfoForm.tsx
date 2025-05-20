'use client';

import {
  Textarea,
  Card
} from '@heroui/react';

export type BedroomLayoutInfo = {
  mode: 'room';
  notes: string;
};

export default function BedroomLayoutInfoForm({
  value,
  onChange,
}: {
  value: BedroomLayoutInfo;
  onChange: (v: BedroomLayoutInfo) => void;
}) {
  return (
    <Card className="w-full p-6 space-y-4">
      <h3 className="text-lg font-semibold">Bedroom Feng Shui Concerns</h3>

      <div>
        <label className="text-sm font-medium">Let us know if there&apos;s anything you&apos;d like the AI to focus on</label>
        <Textarea
          placeholder="e.g., The bed faces the door and I often feel restless; there's a beam above the bed; wondering if mirror placement is okay..."
          value={value.notes}
          onChange={(e) => onChange({ ...value, notes: e.target.value })}
        />
      </div>
    </Card>
  );
}