import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ToDoTable } from "../ToDoTable";

export default function TheMain() {
  return (
    <>
      <div className="  w-full rounded-xl h-96 min-h-60">
        <ToDoTable />
      </div>
    </>
  );
}
