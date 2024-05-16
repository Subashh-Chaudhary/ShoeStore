import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";
import { FormDataProvider } from "./context/ContextProvider";

const Layout = () => {
  const [signInData, setsignInData] = useState([]);
  const [signUpData, setsignUpData] = useState([]);

  const addLogin = (username, password) => {
    setsignInData((prevdata) => [{...username, ...password}, ...prevdata]);
  };
  
  return (
    <FormDataProvider value = {{signInData, signUpData, addLogin}}>
      <main className="relative">
        <Nav />
        <Outlet />
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </FormDataProvider>
  );
};

export default Layout;
