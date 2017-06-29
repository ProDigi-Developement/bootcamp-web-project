import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class EnterModal extends React.Component {

  render() {
    const actions = [
      <FlatButton
        label="Enter"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Enter your username to continue"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <TextField hintText="Enter your username" required />
        </Dialog>
      </div>
    );
  }
}
