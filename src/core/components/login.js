import React from 'react';
import { Button } from '@material-ui/core';
import { storeLoginData, logoutUser } from '../../actions/auth.actions'
import './login.css'
import {connect} from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            auth2: null,
            userDetails: null
        }
    }
    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '101564240377-ti8fd7pgbgn0gph6j0br1ct4nmn55p1l.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.setState({ isSignedIn: false, auth2: window.gapi.auth2.getAuthInstance() });
                console.log(this.state);
            });

        })
    }
    signIn(){
        if (this.state.auth2) {
            this.state.auth2.signIn();
            const data = this.state.auth2.currentUser.get();
            if(data.getBasicProfile() !== undefined){
            this.getUserDetails(data);
            this.props.storeLoginData(data);
            }
        }
    }
    signOut(){
        if(this.state.auth2){
        this.state.auth2.signOut();
        }
        this.props.logoutUser(null);
        this.setState({ isSignedIn: false, userDetails: null});
    }
    getUserDetails(currentUser){
        this.setState(
            {
                userDetails: {
                    userName: currentUser.getBasicProfile().getName(),
                },
                isSignedIn: true
            }
        );
    }
    checkLoginStatus() {
        if (this.state.isSignedIn) {
            return (
                <div class="logout"><Button onClick={() => this.signOut()}>Logout</Button></div>
               
            );
        } else {
            return (
                <div class="login"><Button onClick={() => this.signIn()}>Login</Button></div>
               
            );
        }
    }
    render() {
        console.log('uuuu',this.props.data);
        return (
            <div>
                {this.checkLoginStatus()}
            </div>

        )
    }
}
const mapStateToProps=state=> { 
    return {
        data: state.auth
    }
}
 export default connect(mapStateToProps, {storeLoginData, logoutUser})(Login)