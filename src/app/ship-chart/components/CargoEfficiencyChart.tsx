// components/CargoEfficiencyChart.tsx
"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
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

export function CargoEfficiencyChart() {
  const chartConfig: ChartConfig = {
    cargoEfficiency: {
      label: "Cargo Efficiency",
      color: "hsl(var(--chart-2))",
    },
  };

  const cargoEfficiencyData = shipOperations.map((op) => ({
    month: op.month,
    cargoEfficiency: (op.distanceTravelled / op.cargoWeight).toFixed(2),
  }));

  return (
    <Card className="w-[50%]">
      <CardHeader>
        <CardTitle>Cargo Efficiency Chart</CardTitle>
        <CardDescription>Monthly cargo efficiency of ships</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={cargoEfficiencyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cargoEfficiency"
                stroke={chartConfig.cargoEfficiency.color}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
