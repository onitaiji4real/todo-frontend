// components/ChartContainer.tsx
import React, { ReactElement } from "react";

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartContainerProps {
  config: ChartConfig;
  children: ReactElement;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  config,
  children,
}) => {
  return (
    <div className="chart-container " style={{ position: "relative" }}>
      {children}
    </div>
  );
};
