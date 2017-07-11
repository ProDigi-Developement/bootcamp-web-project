import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from "material-ui/TextField";
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class EnterModal extends React.Component {
  constructor() {
      super();
      this.state = {
          username: ""
      }
  }
  handleChange(e, v) {
      console.log(v);
      this.setState({
          username: v
      })
  }

  render() {
    const actions = [
      <FlatButton
        label="Enter"
        disabled={this.state.username == "" ? true : false}
        primary={true}
        onTouchTap={this.props.handleClose.bind(this, this.state.username)}
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
          <TextField hintText="Enter your username" 
            onChange={this.handleChange.bind(this)}
            required/>
        </Dialog>
      </div>
    );
  }
}

export default EnterModal