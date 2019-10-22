import React from 'react';
import { BootstrapButton } from '../../shared/ui-components/bootstrapbutton';
import './flightBoardingPass.css';
export class FlightBoardingPass extends React.Component {
render(){
    const style1 = {
        'margin-right': '20px'
    };
    return (
        <div class="boarding-pass">
            <div class="boarding-pass-1">
  <div class="transbox">
    <p>Your web check-in is successful.</p>
  </div>
</div>
<div class="boarding-pass-2">
<BootstrapButton style = {style1} color="primary">Paasenger List</BootstrapButton>
<BootstrapButton color="primary">In-Flight</BootstrapButton>
</div>
        </div>
    )
}
}