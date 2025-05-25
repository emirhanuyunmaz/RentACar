import React from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';

type TagRender = SelectProps['tagRender'];

const options: SelectProps['options'] = [
    { value: "Air Conditioning" },
    { value: "Automatic Climate Control" },
    { value: "Navigation System" },
    { value: "Rear View Camera" },
    { value: "Parking Sensor" },
    { value: "Cruise Control" },
    { value: "Multimedia Display" },
    { value: "Android Auto / Apple CarPlay" },
    { value: "Bluetooth Connectivity" },
    { value: "USB / AUX Input" },
    { value: "Keyless Entry" },
    { value: "Push Button Start" },
    { value: "4x4 Drive System" },
    { value: "Start / Stop System" },
    { value: "ABS (Anti-lock Braking System)" },
    { value: "ESP (Electronic Stability Program)" },
    { value: "Airbags" },
    { value: "Tire Pressure Warning System" },
    { value: "Lane Keeping Assist" },
    { value: "Blind Spot Warning System" },
    { value: "Child Seat" },
    { value: "ISOFIX Mounting System" },
    { value: "Hill Start Assist" },
    { value: "Emergency Brake Assist" }
];

const tagRender: TagRender = (props) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
    
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};

export default function CarEquipment () {
    return(
        <Select
            mode="multiple"
            tagRender={tagRender}
            placeholder="Car Equipment"
            style={{ width: '100%' }}
            options={options}
        />);
}


