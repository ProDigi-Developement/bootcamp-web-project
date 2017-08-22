import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class EnterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Enter"
        primary={true}
        onTouchTap={this.props.handleClose.bind(this, this.state.value)}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Enter your username to continue"
          actions={actions}
          modal={true}
          open={this.props.open}>
          <TextField 
            hintText="Enter your username" 
            required
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
           />
        </Dialog>
      </div>
    );
  }
}
