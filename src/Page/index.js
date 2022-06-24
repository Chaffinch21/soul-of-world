import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Gl from "../components/Gl";
import Authorization from "../components/Authorization";
import Photo from "../components/Photo";
import Photos from "../components/Photos";

const Page = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path={"/"} element={<Gl />} />
          <Route path={"/auth"} element={<Authorization />} />
          <Route path={"/photos"} element={<Photos />} />
          <Route path={"/photo"} element={<Photo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Page;
