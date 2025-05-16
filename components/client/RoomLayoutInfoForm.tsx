'use client';

import {
  Textarea,
} from '@heroui/react';

export type RoomLayoutInfo = {
  mode: 'room';
  notes: string;
};

export default function RoomLayoutInfoForm({
  value,
  onChange,
}: {
  value: RoomLayoutInfo;
  onChange: (v: RoomLayoutInfo) => void;
}) {
  return (
    <div className="w-full space-y-4">
      <h3 className="text-lg font-semibold">Room Layout Notes</h3>

      <div>
        <label className="text-sm font-medium">Describe the room and what you&apos;d like analyzed</label>
        <Textarea
          placeholder="e.g., Bed faces the door, there's a mirror on the left wall..."
          value={value.notes}
          onChange={(e) => onChange({ ...value, notes: e.target.value })}
        />
      </div>
    </div>
  );
}