import React from 'react';
import Header from './header';
import Footer from './footer';
import Dashboard from '../../dashboard/dashboard';
import {Route, BrowserRouter as Router } from 'react-router-dom'; 
import  FlightCheckIn  from '../../flight/components/flightCheckIn';
import FlightSeatAllocation  from '../../flight/components/flightSeatAllocation';
import { FlightBoardingPass } from '../../flight/components/flightBoardingPass';
class Layout extends React.Component{
    render(){
        return (
            <div>
            <Header />
            <Router>
            <div>   
             <Route exact path="/" component = {Dashboard} />
             <Route exact path="/flight" component = {FlightCheckIn} />
             <Route exact path="/flight/seatallocation" component = {FlightSeatAllocation} />
             <Route exact path="/flight/confirmation" component = {FlightBoardingPass} />
        </div>
            </Router>
            <Footer />
            </div>
        )
    }
}
export default Layout;