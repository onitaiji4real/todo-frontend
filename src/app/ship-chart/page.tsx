import React from "react";
import TheHeader from "../sales/components/TheHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FuelEfficiencyChart } from "./components/FuelEfficiencyChart";
import { CargoEfficiencyChart } from "./components/CargoEfficiencyChart";
import { ComprehensivePerformanceChart } from "./components/ComprehensivePerformanceChart";

export default function page() {
  return (
    <>
      <TheHeader />
      <MaxWidthWrapper>
        <div className="flex justify-between mt-10 ">
          <FuelEfficiencyChart />
          <CargoEfficiencyChart />
        </div>
        <ComprehensivePerformanceChart />
      </MaxWidthWrapper>
    </>
  );
}
