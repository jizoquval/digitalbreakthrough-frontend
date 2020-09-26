import React from 'react'
import Button from "../components/Button.component";
import Content from "../components/Content.component";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Mascot from "../components/Mascot.component";
import Message from "../components/Message.component";

const msg = `Тебе понравился атракцион? А хочешь получить бонус?

Тогда поделись фотографией из парка в соц сети и забирай свою скидку!`

export default function QuestPage() {
    return (
        <div className="quest-page" style={{ backgroundColor: "#08695D"}}>
          <div className="container h-100 d-flex flex-column">
            <Header title="Задание для тебя"></Header>
            <Content>
                <Message text={msg} rectanglePosition="right"/>
                <Mascot type={"mascot"} />
            </Content>
            <Footer height="140px">
                <div>
                    <Button text="Хочу"/>
                    <Button text="Пропустить" style={{ backgroundColor: "black", color: "white" }}/>
                </div>
            </Footer>
          </div>
        </div>
      );
}
