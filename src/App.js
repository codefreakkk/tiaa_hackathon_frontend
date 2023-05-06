import React from "react";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/watch" element={<Watch/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
