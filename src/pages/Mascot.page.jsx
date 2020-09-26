import React from "react";
import Content from "../components/Content.component";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Mascot from "../components/Mascot.component";
import segmentSwitch from "../assets/icons/segmentSwitch.png";

import "./Mascot.styles.scss";

function MascotPage() {
  return (
    <div className="mascot" style={{ backgroundColor: "#F85E08" }}>
      <div className="container h-100 d-flex flex-column">
        <Header title="Бонусы"></Header>
        <Content>
         <img alt="switch" src={segmentSwitch}/>
          <div className="d-flex flex-row justify-content-between my-2 info">
            <div>1 уровень</div>
            <div style={{color: "#FFBD12"}}>200 бонусов</div>
          </div>
          <Mascot type={"mascotWithHat"} />
        </Content>
        <Footer height="350px"></Footer>
      </div>
    </div>
  );
}

export default MascotPage;
