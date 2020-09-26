import React from "react";
import Button from "../components/Button.component";
import CategoryGrid from "../components/CategoryGrid.component";
import Content from "../components/Content.component";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";

import mascotBottom from "../assets/icons/mascotBottom.png"

function Activities() {
  return (
    <div className="activities-page" style={{ backgroundColor: "#08695D"}}>
      <div className="container h-100 d-flex flex-column">
        <Header title="Парк Горького"></Header>
        <Content>
          <Button text={"Карта парка"} style={{backgroundColor: "black", color: "white", fontSize: "21px", fontWeight: "800" }}/>
          <CategoryGrid/>
        </Content>
        <Footer height="350px">
          <div className="d-flex justify-content-end">
            <img src={mascotBottom} style={{ width: "262px", height: "230px"}}/>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default Activities;
