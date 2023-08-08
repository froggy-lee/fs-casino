import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoadingPage from "../Loading/LoadingPage";

function LayOutPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LoadingPage />
      {children}
      <Footer />
    </>
  );
}

export default LayOutPage;
