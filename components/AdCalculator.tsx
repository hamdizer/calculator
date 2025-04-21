// components/AdCalculator.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/onetrack.png";
import Slider from "./Slider";
import MetricCard from "./MetricCard";

type SliderValues = {
  adSpend: number;
  revenue: number;
};

const AdCalculator: React.FC = () => {
  const [values, setValues] = useState<SliderValues>({
    adSpend: 250000,
    revenue: 250000,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roas = values.revenue > 0 ? values.revenue / values.adSpend : 0;

  const withOnetrack = {
    adSpend: values.adSpend * 0.83,
    revenue: values.revenue * 1.18,
  };

  const withOnetrackRoas = withOnetrack.revenue / withOnetrack.adSpend;

  const monthlySavings =
    values.adSpend -
    withOnetrack.adSpend +
    (withOnetrack.revenue - values.revenue);

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof SliderValues
  ) => {
    const value = parseFloat(e.target.value);
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

  return (
    <div
      className={`max-w-5xl mx-auto bg-gray-900 text-white rounded-lg overflow-hidden transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 pr-0 space-y-8">
          <h2 className="text-2xl font-semibold mb-8">Your Ad Spend Now</h2>

          {["adSpend", "revenue"].map((type) => (
            <div className="space-y-2" key={type}>
              <p className="text-lg mb-4">
                Current Monthly {type === "adSpend" ? "Ad Spend" : "Revenue"}
              </p>
              <div className="relative pb-6">
                <div className="flex justify-between mb-1">
                  <span>$0</span>
                  <span>$500,000</span>
                </div>
                <Slider
                  value={values[type as keyof SliderValues]}
                  onChange={(e) =>
                    handleSliderChange(e, type as keyof SliderValues)
                  }
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-blue-500 text-white px-4 py-1 rounded">
                  {formatCurrency(values[type as keyof SliderValues])}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-700 pt-8">
            <span className="text-lg">Current Monthly ROAS</span>
            <div className="bg-blue-500 px-4 py-2 rounded w-24 text-center font-semibold">
              {roas.toFixed(2)}
            </div>
          </div>
        </div>

        <div
          className="w-full flex flex-col p-8 bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('bg-background.png')",
            backgroundSize: " 100% 100%",
          }}
        >
          <h2 className="text-2xl font-semibold mb-8 flex justify-center items-center">
            With
            <Image
              src={Logo}
              alt="ONETRACK"
              width={253}
              height={24}
              className="ml-2 h-6"
            />
          </h2>

          <MetricCard
            label="Ad Spend"
            current={values.adSpend}
            improved={withOnetrack.adSpend}
            difference={values.adSpend - withOnetrack.adSpend}
            formatCurrency={formatCurrency}
          />

          <MetricCard
            label="Revenue"
            current={values.revenue}
            improved={withOnetrack.revenue}
            difference={withOnetrack.revenue - values.revenue}
            formatCurrency={formatCurrency}
            isGain
          />

          <MetricCard
            label="ROAS"
            current={roas}
            improved={withOnetrackRoas}
            difference={withOnetrackRoas - roas}
            formatCurrency={(val) => val.toFixed(2)}
          />

          <div className="flex justify-between items-center pl-[18%] pt-6">
            <h3 className="text-3xl font-bold leading-tight ml-8">
              Monthly
              <br />
              Savings
            </h3>
            <div className="bg-gradient-to-r from-blue-500/40 to-blue-500 shadow-lg px-6 py-3 rounded text-3xl font-extrabold text-white">
              {formatCurrency(monthlySavings)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCalculator;
