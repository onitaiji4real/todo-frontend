import React from "react";
import TheHeader from "./TheHeader";
import TheMain from "./TheMain";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Layout() {
  return (
    <>
      <TheHeader />
      <MaxWidthWrapper>
        <TheMain />
      </MaxWidthWrapper>
    </>
  );
}
