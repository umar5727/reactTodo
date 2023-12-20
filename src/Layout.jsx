import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, MainSection, SideSection } from "./Components";
// import { Container } from "postcss";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <SideSection /> */}
      {/* <MainSection /> */}
      {/* <main className="ml-96 mt-24 bg-green-100 mr-6 rounded-xl p-5 min-h-screen">
        <div className="mainWrapper">
        <TaskHeader />
        <Outlet />
        </div>
      </main> */}
      <Container>
        <SideSection />
        <MainSection />
      </Container>
    </>
  );
};

export default Layout;
