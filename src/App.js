import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from  './routes';

function App() {
  return (
    <div className="App">

      <Router>
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
      </Router>
    
    </div>
  );
}

export default App;
