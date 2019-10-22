import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import  { storeSelectedFlightDetails }  from '../../actions/flight.actions';
import { connect } from 'react-redux';
import './flightCard.css';
export class FlightCard extends React.Component {
  navigateToCheckIn(){
    this.props.history.push('/flight/checkin');
  }
  render() {
    let flightData = this.props.flightData
    console.log(flightData);
    const ButtonRoute = withRouter(({ history }) => (
      <Button
       size="small" color="primary"
        onClick={() => { 
          console.log('flightdata', flightData);
          this.props.storeSelectedFlightDetails(flightData);
          history.push('/flight') }}
      >
        Check In!
      </Button>
    ))
    return (
      <Card className="card">
        <div className="container-fluid card-wrapper">
          <div className="row ">

            <div class="text col-sm-3">
              <img class="image" alt='imag' src='https://ramatniseko.com/wp-content/uploads/2012/07/Air-Asia.jpg'/><Typography class="text-1">{flightData.airlineName}</Typography>
              <p class="small-text">{flightData.id}</p> 

              </div>
              <div class="text col-sm-4">
                <div class="row">
                <div class="text col-sm-4 from"><Typography class="text-1">{flightData.startTime}</Typography>
              <p class="small-text text-1">{flightData.From}</p> 
            </div>
            <div class=" col-sm-3 horizontal-line"></div>
            <div class="text col-sm-4 To" ><Typography class="text-1">{flightData.endTime}</Typography>
              <p class="small-text text-1">{flightData.To}</p> 
            </div>
                </div>
              
              </div>
            
            <div class="text col-sm-5" >{flightData.duration}</div>
          </div>
        </div>

        <hr class="hr" />
        <CardActions className="cardaction">
          {/* <Button onClick={() => this.navigateToCheckIn()} size="small" color="primary">
            Check-In
        </Button> */}
        <ButtonRoute />
          <Button size="small" color="primary">
            In-Flight
        </Button>
        </CardActions>
      </Card>


    );
  }
}
export default connect(null,{storeSelectedFlightDetails})(FlightCard);