import React from "react";
import NavigationBar from "../components/NavigationBar";
import ContentHome from "../content/ContentHome";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="background-home">
        <NavigationBar />
        <ContentHome />
      </section>
    </>
  );
}

export default Home;
