// components/FuelEfficiencyChart.tsx
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
import { ChartConfig, ChartContainer } from "./ChartContainer";
import ship_data from "../../sales/data/ShipManagement.json";

interface ShipOperation {
  month: string;
  fuelConsumption: number;
  distanceTravelled: number;
  incidents: number;
  cargoWeight: number;
}

const shipOperations: ShipOperation[] = ship_data.shipOperations;

export function FuelEfficiencyChart() {
  const chartConfig: ChartConfig = {
    fuelEfficiency: {
      label: "Fuel Efficiency",
      color: "hsl(var(--chart-1))",
    },
  };

  const fuelEfficiencyData = shipOperations.map((op) => ({
    month: op.month,
    fuelEfficiency: (op.distanceTravelled / op.fuelConsumption).toFixed(2),
  }));

  return (
    <Card className="w-[50%]">
      <CardHeader>
        <CardTitle>Fuel Efficiency Chart</CardTitle>
        <CardDescription>Monthly fuel efficiency of ships</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={fuelEfficiencyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="fuelEfficiency"
                stroke={chartConfig.fuelEfficiency.color}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
