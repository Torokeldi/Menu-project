import Layoutsite from "@/components/Layout/LayoutSite";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <Layoutsite>{children}</Layoutsite>;
};

export default layout;
