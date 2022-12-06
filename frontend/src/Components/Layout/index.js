import React from "react";
import { LayoutContainer } from "./LayoutElements";

function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
