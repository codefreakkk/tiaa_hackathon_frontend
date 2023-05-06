import React from "react";
import HomeHeader from "./HomeHeader";
import Card from "./Card";

function Main() {
  return (
    <>
      <div className="main">
        <HomeHeader />
        <div class="container">
          <div class="row row-cols-6">
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>

            <div class="col">
              <Card />
            </div>

            <div class="col">
              <Card />
            </div>

            <div class="col">
              <Card />
            </div>
            
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            <div class="col">
              <Card />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
