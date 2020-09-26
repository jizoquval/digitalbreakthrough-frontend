import React, { Component } from "react";
import ActivityBlock from "../components/ActivityBlock.component";
import Button from "../components/Button.component";
import Content from "../components/Content.component";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Mascot from "../components/Mascot.component";
import Message from "../components/Message.component";

import "./Welcome.styles.scss";

const msg = `Привет! Я так рад видеть тебя! Давай дружить, я покажу самые крутые развлечения?
Мы весело проведем этот день!`;

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-page">
        <div className="container h-100 d-flex flex-column">
          <Header></Header>
          <Content>
            <Message text={msg} />
            <Mascot type={"mascot"} />
          </Content>
          <Footer>
            <Button text={"Давай начнем"} />
          </Footer>
        </div>
      </div>
    );
  }
}
