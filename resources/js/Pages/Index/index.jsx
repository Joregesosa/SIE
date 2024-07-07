import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function index({auth,canLogin,canRegister,laravelVersion,phpVersion,}) {
    return (
    <div className="min-h-screen h-screen flex flex-col">
     <Navbar auth={auth} canLogin={canLogin} canRegister={canRegister} />
      <Hero />
      <Footer laravelVersion={laravelVersion} phpVersion={phpVersion} /> 
    </div>
      
    );
}
