import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router } from 'react-router-dom'; 
import Layout from './core/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FlightCheckIn } from './flight/components/flightCheckIn';
function App() {
  return (
    <div className="App">
    <Router>
        <div>   
            <Route exact path = '/' component={Layout} />
            {/* <Route path = '/flight' component={FlightCheckIn} /> */}
        </div>
    </Router>
    </div>
)
}
export default App;
