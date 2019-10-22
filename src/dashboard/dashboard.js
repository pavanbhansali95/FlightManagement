import React from 'react';
import { connect } from 'react-redux';
import FlightCard from '../flight/components/flightCard';
import { getAllFlights } from '../actions/flight.actions';
export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allFlightDetails: []
        };
    }
    componentDidMount(){
        this.props.getAllFlights();
    }
    getFlightDetails(){
        if(this.props.allFlightData !== undefined){
            console.log(this.props.allFlightData);
            this.setState({
                allFlightDetails: 
                    ['','a']
                
        
            });
            }
    }
render(){
    // const allData = this.props.allFlightData.flightDetails.data; 
    let allData = this.props && this.props.allFlightData ? this.props.allFlightData : []; 
    return (
        <div>
        {allData.map((post,key) => {
            return (
                <div key={key} className="card-parent" style={{padding:"40px 20px"}}>
                <FlightCard flightData={post}/>
             </div>
            )
        })
    }
        </div>
        // // <div>
        //     {/* {allData}.map((data) => { */}
               
        //     {/* })
        //     </div> */}
       
        
)
}
}
const mapStateToProps  = state => {
    return {
        allFlightData: state.flight.allFlights
    };
}
export default connect(mapStateToProps, {getAllFlights})(Dashboard);