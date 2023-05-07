import React from "react";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/watch/:id" element={<Watch/>}></Route>
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
