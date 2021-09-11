import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className=" bg-darkGrey">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
