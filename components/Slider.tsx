import React from "react";

type SliderProps = {
  value: number;
  max?: number;
  min?: number;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  max = 500000,
  min = 0,
  step = 1,
}) => {
  const percent = (value / max) * 100;

  return (
    <div className="relative w-full h-6">
      <div
        className="absolute top-1/2 left-0 w-full h-3 rounded-full transform -translate-y-1/2 pointer-events-none"
        style={{
          background: `linear-gradient(to right, #3B82F6 ${percent}%, #6B7280 ${percent}%)`,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="
          !w-full !appearance-none !bg-transparent !h-3 !z-10 !relative
  [&::-webkit-slider-thumb]:!appearance-none 
  [&::-webkit-slider-thumb]:!h-6 
  [&::-webkit-slider-thumb]:!w-6 
  [&::-webkit-slider-thumb]:!rounded-full 
  [&::-webkit-slider-thumb]:!bg-blue-500 
  [&::-webkit-slider-thumb]:!cursor-pointer 
  [&::-webkit-slider-thumb]:!shadow-md

  [&::-moz-range-thumb]:!appearance-none 
  [&::-moz-range-thumb]:!h-6 
  [&::-moz-range-thumb]:!w-6 
  [&::-moz-range-thumb]:!rounded-full 
  [&::-moz-range-thumb]:!bg-blue-500 
  [&::-moz-range-thumb]:!cursor-pointer 
  [&::-moz-range-thumb]:!shadow-md
        "
      />
    </div>
  );
};

export default Slider;
