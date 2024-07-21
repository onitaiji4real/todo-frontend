"use client";
import React from "react";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import sales_data from "../data/sales_data.json";

const chartConfig = {
  Clothing: {
    label: "Clothing",
    color: "#2563eb",
  },
  Electronics: {
    label: "Electronics",
    color: "#60a5fa",
  },
};

export default function Chart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={sales_data.sales}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          //   tickFormatter={(value) => value.slice(0)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="units_sold" fill="var(--color-Clothing)" radius={4} />
        <Bar
          dataKey="sales_amount"
          fill="var(--color-Electronics)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
