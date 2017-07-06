import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class EnterModal extends React.Component {
  state = {
    open: this.props.open,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Enter"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Enter your username to continue"   
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField hintText="Enter your username" />
        </Dialog>
      </div>
    );
  }
}

export default EnterModal