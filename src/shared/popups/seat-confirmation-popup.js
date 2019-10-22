import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
export class SeatConfirmationPopup extends React.Component{
  constructor(props){
    super(props);
  }
  onClickOk() {
    this.props.onProceed();
  }
  onClickCancel() {
    this.props.onCancel();
  }
    render(){
        return (
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              maxWidth="xs"
            //   onEntering={handleEntering}
              aria-labelledby="confirmation-dialog-title"
              open={this.props.open}
            >
              <DialogTitle id="confirmation-dialog-title">Selected Seat</DialogTitle>
              <DialogContent dividers>{this.props.selectedSeat}
              </DialogContent>
              <DialogActions>
                <Button onClick = { () => this.props.onCancel() } color="primary">
                  Cancel
                </Button>
                <Button onClick = { () => this.props.onProceed() } color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          );
    }
}