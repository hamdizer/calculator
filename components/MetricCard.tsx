import React from "react";
import Image from "next/image";
import Logo from "../public/onetrack.png";

type Props = {
  label: string;
  current: number;
  improved: number;
  difference: number;
  formatCurrency: (val: number) => string;
  isGain?: boolean;
};

const MetricCard: React.FC<Props> = ({
  label,
  current,
  improved,
  difference,
  formatCurrency,
  isGain = false,
}) => (
  <div className="flex justify-center w-full">
    <div className="w-[76%] ml-[135px] bg-gradient-to-br from-gray-800/5 to-gray-300/25 border border-gray-600 rounded-3xl p-4 space-y-2 mb-3">
      <p className="text-sm">
        {label} {isGain ? "+" : "-"}{" "}
        <span className="font-bold text-base text-white">
          {typeof difference === "number"
            ? formatCurrency(Math.abs(difference))
            : "-"}
        </span>
      </p>
      <div className="flex flex-row">
        <div className="flex-grow mr-5 bg-gradient-to-r from-gray-300 to-gray-600 text-white px-3 py-1 rounded text-sm mb-3 shadow-md">
          Your current {label}
        </div>
        <span className="font-semibold text-base text-white">
          {formatCurrency(current)}
        </span>
      </div>
      <div className="flex flex-row">
        <div className="flex-grow mr-5 bg-gradient-to-r from-blue-400 to-blue-700 text-white px-3 py-1 rounded text-sm flex items-center">
          <span className="mr-1">with</span>
          <Image
            src={Logo}
            alt="ONETRACK"
            width={107}
            height={10}
            className="h-3 mr-auto"
          />
        </div>
        <span className="font-semibold text-base text-white">
          {formatCurrency(improved)}
        </span>
      </div>
    </div>
  </div>
);

export default MetricCard;
