import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { LayoutList } from "lucide-react";

export default function TheHeader() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center w-full h-24 pt-2.5 ">
        <div className=" flex flex-col items-center relative">
          <LayoutList size={50} />
          <h1>ToDo Web</h1>
        </div>

        <div className="flex justify-start items-center gap-5">
          <h2>Sign up</h2>
          <h2>Help</h2>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
