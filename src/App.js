import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './pages/Welcome.page';
import Activities from './pages/Activities.page';
import QuestPage from './pages/Quest.page';
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/welcome" component={WelcomePage}/>
        <Route path="/categories" component={Activities}/>
        <Route path="/quest" component={QuestPage}/>
      </Switch>
    </div>
  );
}

export default App;
