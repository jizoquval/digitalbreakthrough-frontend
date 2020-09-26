import React from 'react';
import './App.css';
import WelcomePage from './pages/Welcome.page';
import Activities from './pages/Activities.page';
import QuestPage from './pages/Quest.page';
import { Route, Switch } from "react-router-dom"
import MascotPage from './pages/Mascot.page';


function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/digitalbreakthrough-frontend/" component={WelcomePage}/>
        <Route path="/digitalbreakthrough-frontend/categories" component={Activities}/>
        <Route path="/digitalbreakthrough-frontend/quest" component={QuestPage}/>
        <Route path="/digitalbreakthrough-frontend/mascot" component={MascotPage}/>
      </Switch>
    </div>
  );
}

export default App;
