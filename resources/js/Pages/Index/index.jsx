import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { useEffect } from "react";

export default function index({auth,canLogin,canRegister,laravelVersion,phpVersion,}) {

  useEffect(() => {
    if (auth.user) {
      window.location.href = "/dashboard";
    }
  }, []);

    return (
    <div className="min-h-screen h-screen flex flex-col">
     <Navbar auth={auth} canLogin={canLogin} canRegister={canRegister} />
      <Hero />
      <Footer laravelVersion={laravelVersion} phpVersion={phpVersion} /> 
    </div>
      
    );
}
