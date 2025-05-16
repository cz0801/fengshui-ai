'use client';

import { Card, Tabs, Tab } from '@heroui/react';
import FloorPlanInfoForm, { FloorPlanInfo } from './FloorPlanInfoForm';
import RoomLayoutInfoForm, { RoomLayoutInfo } from './RoomLayoutInfoForm';

export type UploadMode = 'floorplan' | 'room';
export type ExtraInfo = FloorPlanInfo | RoomLayoutInfo;

export default function ImageExtraInfoForm({
  value,
  onChange,
}: {
  value: ExtraInfo;
  onChange: (v: ExtraInfo) => void;
}) {
  const mode = value.mode;

  const handleModeChange = (newMode: UploadMode) => {
    // 初始化结构（避免缺字段）
    if (newMode === 'floorplan') {
      onChange({
        mode: 'floorplan',
        northUp: 'yes',
        type: 'apartment',
        totalFloors: 0,
        currentFloor: 0,
        notes: '',
      });
    } else {
      onChange({
        mode: 'room',
        notes: '',
      });
    }
  };

  return (
    <Card className="w-full p-6 space-y-4">
      <h3 className="text-lg font-semibold">Choose Analysis Mode</h3>

      <Tabs
        aria-label="Analysis Mode"
        selectedKey={mode}
        onSelectionChange={(key) => handleModeChange(key as UploadMode)}
      >
        <Tab key="room" title="Room Layout">
          <RoomLayoutInfoForm
            value={value as RoomLayoutInfo}
            onChange={(v) => onChange({ ...v, mode: 'room' })}
          />
        </Tab>

        <Tab key="floorplan" title="Floor Plan">
          <FloorPlanInfoForm
            value={value as FloorPlanInfo}
            onChange={(v) => onChange({ ...v, mode: 'floorplan' })}
          />
        </Tab>
      </Tabs>
    </Card>
  );
}