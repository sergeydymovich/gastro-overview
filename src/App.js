import React from 'react';
import './App.css';
import Data from "./data.js";
import Cafe from "./Cafe.js";
import CafeInfo from "./CafeInfo.js";
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
            <div className="header" >
              <h1>gastro-owerview</h1> 
            </div>
            <div className="content">
              <ul className="list">
                { Data.map( (elem) => (
                  <Link to={"/" + elem.name}>
                    <Cafe
                    name={elem.name}
                    id={uuidv4()}
                    />
                  </Link>
                  
                ))}
              </ul>
              <Switch>
              <div className="cafe-info">
              { Data.map( (elem) => (
                <Route path={"/" + elem.name}>
                  <CafeInfo
                      name={elem.name}
                      dishes={elem.dishes}
                      stars={elem.stars}
                  />
                </Route>
              ))
              }
              </div>
            </Switch> 
            </div>
             
        </div>
      </Router>

    );
  }
  
}

export default App;
