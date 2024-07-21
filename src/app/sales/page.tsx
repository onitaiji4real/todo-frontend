import React from "react";
import TheHeader from "./components/TheHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TheMain from "./components/TheMain";

export default function page() {
  return (
    <>
      <TheHeader />
      <MaxWidthWrapper>
        <TheMain />
      </MaxWidthWrapper>
    </>
  );
}
