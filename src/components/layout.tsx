import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
export default Layout;
