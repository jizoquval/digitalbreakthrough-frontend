import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button.component";
import Content from "../components/Content.component";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Mascot from "../components/Mascot.component";
import Message from "../components/Message.component";

import "./Welcome.styles.scss";

const msg = `Привет! Я так рад видеть тебя! Давай дружить, я покажу самые крутые развлечения?
Мы весело проведем этот день!`;

export default function Welcome() {
  const history = useHistory()
  
  return (
      <div className="welcome-page">
        <div className="container h-100 d-flex flex-column">
          <Header title="Добро пожаловать!"></Header>
          <Content>
            <Message text={msg} />
            <Mascot type={"mascot"} />
          </Content>
          <Footer height="100px">
            <Button text={"Давай начнем"} onClick={() => history.push("digitalbreakthrough-frontend/categories")}/>
          </Footer>
        </div>
      </div>
  );
}
