import React from "react";
import SalesBarChart from "./SalesBarChart";
import { SingleLineChart } from "./SingleLineChart";
import { SwitchBarChart } from "./SwitchBarChart";
import sales_data from "../data/sales_data.json";
import { FuelEfficiencyChart } from "../../ship-chart/components/FuelEfficiencyChart";
export default function TheMain() {
  return (
    <>
      <div className="  w-full rounded-xl h-96 min-h-60   mt-10 flex justify-center ">
        <SwitchBarChart />
      </div>
      <div className="flex  justify-around mt-5">
        <SingleLineChart data={sales_data.sales} category="Electronics" />
        <SingleLineChart data={sales_data.sales} category="Clothing" />
      </div>
    </>
  );
}
