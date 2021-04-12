import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from  './routes';
import './style.css';

function App() {
  return (
    <div className="App">

      {/* <Router>
      {
           routes.map((route,index) => (
           
            <Route 
              key={index}
              path={route.path} 
              exact = {route.exact}
              component={route.component}
            />
           ))

         }
      </Router> */}
    
      hello
    </div>
  );
}

export default App;
