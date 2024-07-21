// components/ComprehensivePerformanceChart.tsx
"use client";

import {
  CartesianGrid,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "./ChartContainer";
import ship_data from "../../sales/data/ShipManagement.json";

interface ShipOperation {
  month: string;
  fuelConsumption: number;
  distanceTravelled: number;
  incidents: number;
  cargoWeight: number;
}

const shipOperations: ShipOperation[] = ship_data.shipOperations;

export function ComprehensivePerformanceChart() {
  const chartConfig: ChartConfig = {
    fuelConsumption: {
      label: "Fuel Consumption",
      color: "hsl(var(--chart-1))",
    },
    distanceTravelled: {
      label: "Distance Travelled",
      color: "hsl(var(--chart-2))",
    },
    cargoWeight: {
      label: "Cargo Weight",
      color: "hsl(var(--chart-3))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comprehensive Performance Chart</CardTitle>
        <CardDescription>Overall performance of ships</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={shipOperations}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="fuelConsumption"
                stackId="a"
                fill={chartConfig.fuelConsumption.color}
              />
              <Bar
                dataKey="distanceTravelled"
                stackId="a"
                fill={chartConfig.distanceTravelled.color}
              />
              <Bar
                dataKey="cargoWeight"
                stackId="a"
                fill={chartConfig.cargoWeight.color}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
