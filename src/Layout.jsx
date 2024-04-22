import React from "react";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="relative">
      <Nav />
      <Outlet/>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
