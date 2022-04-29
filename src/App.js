import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/homePage";
import NavBar from "./components/navBar";
import {Route, Switch} from 'react-router-dom';
import MyScore from './components/myScore';
import MonthlyReport from './components/monthlyReport';
import DailyReport from './components/dailyReport';
import Simulator from './components/simulator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar className='navbar'></NavBar>
        <main className='container'>
          <Switch>
            <Route path='/simulator' component={Simulator}></Route>
            <Route path='/monthly-report' component={MonthlyReport}></Route>
            <Route path='/daily-report' component={DailyReport}></Route>
            <Route path='/' component={HomePage}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
