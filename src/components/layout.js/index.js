import React from "react";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ children, isFixed }) => {
  return (
    <div
      style={{
        height: isFixed && "100vh",
        backgroundColor: isFixed && "#527768",
      }}
    >
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
