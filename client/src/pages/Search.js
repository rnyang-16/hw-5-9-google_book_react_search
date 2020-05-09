import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Header page="search" custom="navbar-expand-lg bg-dark" />
      <Main name='Search'>
        
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
