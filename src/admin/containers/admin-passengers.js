import React,{ Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getFlightPassengers, storeSelectedPassengerDetails } from '../../actions/flight.actions';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import AdminNavBar from "../components/admin-nav-bar";
import './admin-passengers.scss';
class AdminPassengers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: 'Select seat(s)',
            navBarClass: '',
            selectedPassenger: null,
            passportChecked: false,
            addressChecked: false,
            dobChecked: false,
            allPassengerData: null,
            tableData: {
                columns: [
                    { title: 'PNR', field: 'pnr' },
                    { title: 'PASSENGER NAME', field: 'passengerName' },
                    { title: 'SEAT NO', field: 'seatNumber' },
                    {
                        title: 'ADD-ONS',
                        field: 'addOns'
                        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    }
                ],
                data: [
                    { paxNo: '2', passengerName: 'Baran', seatNumber: '-', addOns: 'PROM', boardingPass: '-' },
                ],
            }
        };

    }
    onNavBarHandler = (className) => {
        this.setState({
            navBarClass: className
        })
    }
    filterPassengerHandler = (name,event) => {
        this.setState({
            ...this.state,
            [name] : event.target.checked
        });
        
    }
    getTableData = () => {
        const data = [];
        let passengerData = [];
        if(this.props.flightPassengerData.length !== 0) {
            passengerData = this.props.flightPassengerData;
            if(this.state.passportChecked === true){
                passengerData = passengerData.filter((data) => {
                    return data.passport === null
                });
            }
        if(this.state.addressChecked === true){
                passengerData = passengerData.filter((data) => {
                    return data.address === null
                });
            }
            if(this.state.dobChecked === true){
                passengerData = passengerData.filter((data) => {
                    return data.dob === null
                });
            }
            passengerData.forEach((passengerData) => {
                data.push({
                    pnr: passengerData.pnr, 
                    passengerName: passengerData.name, 
                    seatNumber: (passengerData.seatno !== null) ? passengerData.seatno: '-', 
                    addOns: 'PROM', 
                    boardingPass: (passengerData.ischeckedin === 'true') ? 'Yes' : '-'
                });
    });
}
    return data;
}
    componentDidMount() {
        if (this.props.selectedFlightData) {
            const flightData = this.props.selectedFlightData;
            this.props.getFlightPassengers(flightData.flightId);
        }
    }
    render() {
        const data =[];
        const passengerMappedData = [];
        let navClass = `admin-landing-page-1 ${this.state.navBarClass}`;
        const BootstrapButton = withStyles({
            root: {
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 12,
                padding: '6px 12px',
                border: '1px solid',
                lineHeight: 1.5,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
                '&:hover': {
                    backgroundColor: '#0069d9',
                    borderColor: '#0062cc',
                },
                '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#0062cc',
                    borderColor: '#005cbf',
                },
                '&:focus': {
                    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                },
            },
        })(Button);
        if(this.props.flightPassengerData) {
            const passengerData = this.props.flightPassengerData;
            passengerData.forEach((passengerData) => {
                data.push({
                    pnr: passengerData.pnr, 
                    passengerName: passengerData.name, 
                    seatNumber: (passengerData.seatno !== null) ? passengerData.seatno: '-', 
                    addOns: 'PROM', 
                    boardingPass: (passengerData.ischeckedin === 'true') ? 'Yes' : '-'
                });
                passengerMappedData.push({
                    "name": passengerData.name,
                    "pnr": passengerData.pnr,
                    "flightid": passengerData.flightid,
                    "ischeckedin": passengerData.ischeckedin,
                    "category": passengerData.category,
                    "seatno": passengerData.seatno,
                    "row": passengerData.row,
                    "id": passengerData.id,
                    "addons": passengerData.addons,
                    "address": passengerData.address,
                    "passport" : passengerData.passport,
                    "dob": passengerData.dob,
                    "email": passengerData.email
                })
            });
         }
        let tableData = (this.props && this.props.flightPassengerData && data.length !== 0) ? { 
            columns: [
                { title: 'PNR', field: 'pnr' },
                { title: 'PASSENGER NAME', field: 'passengerName' },
                { title: 'SEAT NO', field: 'seatNumber' },
                {
                    title: 'ADD-ONS',
                    field: 'addOns'
                    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                }
            ],
            data: this.getTableData()
         } : {};

        return (
            <div className="admin-landing-page">
             <div className = {navClass}>
            <AdminNavBar onNavBarHandler = {this.onNavBarHandler} />
            </div>
            <div className = "admin-passenger-landing-page-2">
            <div className="admin-seat-1">
                    PASSENGER LIST
                </div>
            <div>   
                <div className="flight-checkin-3 d-none d-sm-block">
                    <div className="admin-checkin-31">
                        <div className="admin-checkin-311">
                            <div className="admin-filter-1">
                        <Typography style={{fontWeight: 'bold',paddingRight: '400px'}} className="admin-destination-1">FILTER BY</Typography>
                        <Button style={{fontSize:"smaller"}} variant="contained" color="secondary"  onClick = { () => this.props.history.push('/admin/add') }  >
                  Add Passenger
                </Button>
                        </div>
                        <div className="admin-filter-2">
                        <FormControlLabel
        control={
            <Checkbox
            value="passportChecked"
            onChange = {this.filterPassengerHandler.bind(this,'passportChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing Passport"
      />
       
      <FormControlLabel
        control={
            <Checkbox
            value="addressChecked"
            onChange = {this.filterPassengerHandler.bind(this,'addressChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing Address"
      />
          <FormControlLabel
        control={
            <Checkbox
            value="dobChecked"
            onChange = {this.filterPassengerHandler.bind(this,'dobChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing DateOfBirth"
      />
      </div>
                        </div>
                        <div className="flight-checkin-311">
                        </div>
                    </div>

                    <div className="admin-checkin-32">
                        <MaterialTable
                            columns={tableData.columns}
                            data={tableData.data}
                            actions={[
                                {
                                  icon: AirlineSeatReclineExtraIcon,
                                  tooltip: 'Check-in',
                                  onClick: (event, rowData) => () => { 
                                    this.props.history.push('/flight/seatallocation') }}
                              ]}
                            components={{
                                Action: props => (
                                    <BootstrapButton onClick={(event) => {
                                        const selectedPassengerData  = passengerMappedData.filter(data => data.pnr === props.data.pnr);
                                        this.props.storeSelectedPassengerDetails(selectedPassengerData[0]);
                                        this.props.history.push('/admin/update');
                                        props.action.onClick(event, props.data)
                                        }} disableRipple variant="contained" color="primary">
                                                            Update
                                                      </BootstrapButton>
                                ),
                              }}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'black',
                                    color: '#FFF'
                                },
                                showTitle: false,
                                paging: false,
                                maxBodyHeight: 300,
                                actionsColumnIndex: -1,
                                actionsCellStyle: {
                                    width: '100px'
                                },
                                showSelectAllCheckbox: false,
                                rowStyle: rowData => ({
                                    backgroundColor: (this.state.selectedPassenger && this.state.selectedPassenger.tableData.checked === true && this.state.selectedPassenger.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF',
                                    border: (this.state.selectedPassenger && this.state.selectedPassenger.tableData.checked === true && this.state.selectedPassenger.tableData.id === rowData.tableData.id) ? '3px solid orange' : null
                                }),
                                selectionProps: rowData => ({
                                    //     disabled: this.state.selectedPassenger !== null,
                                    color: 'primary'
                                })
                            }}
                            onSelectionChange={(rows, data) => {
                                console.log(data);
                                if(data.tableData.checked === true){
                                    //
                                }
                            }}
                        />
                    </div>
                    <div className="flight-checkin-33">
                        <div className="flight-checkin-332">
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none admin-checkin-3">
                    <div className="admin-checkin-31">
                        <div className="admin-checkin-311">
                            <div className="admin-filter-1">
                        <Typography style={{fontWeight: 'bold'}} className="admin-destination-1">FILTER BY</Typography>
                        </div>
                        <div className="admin-filter-2">
                        <FormControlLabel
        control={
            <Checkbox
            value="passportChecked"
            onChange = {this.filterPassengerHandler.bind(this,'passportChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing Passport"
      />
       
      <FormControlLabel
        control={
            <Checkbox
            value="addressChecked"
            onChange = {this.filterPassengerHandler.bind(this,'addressChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing Address"
      />
          <FormControlLabel
        control={
            <Checkbox
            value="dobChecked"
            onChange = {this.filterPassengerHandler.bind(this,'dobChecked')}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label="Missing DateOfBirth"
      />
      </div>
                        </div>
                        <div className="flight-checkin-311">
                        </div>
                    </div>

                    <div className="admin-checkin-32">
                        <MaterialTable
                            columns={tableData.columns}
                            data={tableData.data}
                            actions={[
                                {
                                  icon: AirlineSeatReclineExtraIcon,
                                  tooltip: 'Check-in',
                                  onClick: (event, rowData) => () => { 
                                    this.props.history.push('/flight/seatallocation') }}
                              ]}
                            components={{
                                Action: props => (
                                    <BootstrapButton onClick={(event) => {
                                        const selectedPassengerData  = passengerMappedData.filter(data => data.pnr === props.data.pnr);
                                        this.props.storeSelectedPassengerDetails(selectedPassengerData[0]);
                                        this.props.history.push('/admin/update');
                                        props.action.onClick(event, props.data)
                                        }} disableRipple variant="contained" color="primary">
                                                            Update
                                                      </BootstrapButton>
                                ),
                              }}
                            options={{
                                headerStyle: {
                                    backgroundColor: 'black',
                                    color: '#FFF'
                                },
                                showTitle: false,
                                paging: false,
                                maxBodyHeight: 300,
                                actionsColumnIndex: -1,
                                actionsCellStyle: {
                                    width: '100px'
                                },
                                showSelectAllCheckbox: false,
                                rowStyle: rowData => ({
                                    backgroundColor: (this.state.selectedPassenger && this.state.selectedPassenger.tableData.checked === true && this.state.selectedPassenger.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF',
                                    border: (this.state.selectedPassenger && this.state.selectedPassenger.tableData.checked === true && this.state.selectedPassenger.tableData.id === rowData.tableData.id) ? '3px solid orange' : null
                                }),
                                selectionProps: rowData => ({
                                    //     disabled: this.state.selectedPassenger !== null,
                                    color: 'primary'
                                })
                            }}
                            onSelectionChange={(rows, data) => {
                                if(data.tableData.checked === true){
                                    //
                                }
                            }}
                        />
                    </div>
                    <div className="admin-checkin-33">
                        <div className="admin-checkin-332">
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
           
         
        )
    }
}
const mapStateToProps=state=> { 
    return {
        selectedFlightData: state.flight.selectedFlightDetails,
        flightPassengerData: state.flight.passengerDetails
    };
}
export default connect(mapStateToProps ,{getFlightPassengers , storeSelectedPassengerDetails})(AdminPassengers)