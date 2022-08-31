import React from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useRouteMatch
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Creation from "./components/Create";
import User from "./components/Profile";
import ContactInfo from "./components/Contact";
import './components/style.css';
import Burgers from "./components/Explore";
import {GlobalProvider} from './context/GlobalState';
import { EditUser } from "./components/Edit";

// const burgerBg = new URL('./images/burger.jpg',import.meta.url)


function App() {


  return (
    <GlobalProvider>
      <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <img src={burgerBg} className="burgerBG" /> */}
          <Switch className="pages">
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Creation} />
            <Route exact path="/profile" component={User} />
            <Route exact path="/contact" component={ContactInfo} />
            <Route exact path="/explore" component={Burgers} />
            <Route path="/edit" component={EditUser} />
          </Switch>
        </div>
        
        
      </div>
      
      </Router>
    </GlobalProvider>
    
    
  );
}


export default App;
