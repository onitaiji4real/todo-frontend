import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Ship } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TheHeader() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center w-full h-24 pt-2.5 ">
        <div className=" flex flex-col items-center relative">
          <Ship size={65} />
          <h1 className="text-xl">Ship-Web</h1>
        </div>

        <div className="flex justify-start items-center gap-5">
          <Link href={"/sales"}>
            <Button>考題一</Button>
          </Link>
          <Link href={"/ship-chart"}>
            <Button variant="secondary">考題二</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
