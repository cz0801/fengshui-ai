'use client';

import {
  RadioGroup,
  Radio,
  Input,
  Textarea,
  Card,
} from '@heroui/react';

export type FloorPlanInfo = {
  mode: 'floorplan';
  northUp: string;
  type: 'apartment' | 'house';
  totalFloors: number;
  currentFloor: number;
  notes: string;
};

export default function FloorPlanInfoForm({
  value,
  onChange,
}: {
  value: FloorPlanInfo;
  onChange: (v: FloorPlanInfo) => void;
}) {
  const handleChange = (field: keyof FloorPlanInfo, val: string | number) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <Card className="w-full p-6 space-y-6">
      <h3 className="text-lg font-semibold">Floor Plan Information</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Is the top of the plan facing North?</label>
          <RadioGroup
            orientation="horizontal"
            value={value.northUp}
            onValueChange={(v) => handleChange('northUp', v)}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        </div>

        <div>
          <label className="text-sm font-medium">What type of building is it?</label>
          <RadioGroup
            orientation="horizontal"
            value={value.type}
            onValueChange={(v) => handleChange('type', v as 'apartment' | 'house')}
          >
            <Radio value="apartment">Apartment</Radio>
            <Radio value="house">House</Radio>
          </RadioGroup>
        </div>
      </div>

      {value.type === 'apartment' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Total floors in the building</label>
            <Input
              type="number"
              min={1}
              value={value.totalFloors === 0 ? '' : value.totalFloors.toString()}
              onChange={(e) => handleChange('totalFloors', Number(e.target.value))}
              placeholder="e.g. 12"
              className="w-48 max-w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Floor where the plan is located</label>
            <Input
              type="number"
              min={1}
              value={value.currentFloor === 0 ? '' : value.currentFloor.toString()}
              onChange={(e) => handleChange('currentFloor', Number(e.target.value))}
              placeholder="e.g. 3"
              className="w-48 max-w-full"
            />
          </div>
        </div>
      )}

      <div>
        <label className="text-sm font-medium">Any notes or special questions for analysis</label>
        <Textarea
          placeholder="Optional: e.g., Please focus on the bedroom area..."
          value={value.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
        />
      </div>
    </Card>
  );
}