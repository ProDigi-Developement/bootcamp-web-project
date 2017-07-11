import React, { Component } from "react";
import CardComponents from "components/cards";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import ActionInfo from "material-ui/svg-icons/action/info";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import API from "utils/api";
import EnterModal from "components/enter_modal";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  messages: {
    width: 800
  }
};

class MyApp extends Component {
  constructor() {
    super()
    this.state = {
      open: true,
      username: "",
      messages: [],
      msg:''
    }
    this.api = null;
  }
  handleClose(username) {
    console.log("username is", username)
    this.setState({open:false, username: username})
  }
  componentWillMount() {
    this.api = new API();
    this.api.login(resp => {
      this.loadMessages();
    })
  }
  loadMessages() {
    this.api.getMessages(resp => {
      this.setState({messages:Object.values(resp)});
    });
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({msg:event.target.value});
  }
  handleSubmit(event) {
    this.api.addMessage(this.state.username, this.state.msg, cb => {
      this.loadMessages();
      this.setState({msg:''});
    });
  }
  render() {
    return (
      <div style={styles.container}>
        <EnterModal open={this.state.open} handleClose={this.handleClose.bind(this)}/>
        <List>
          <Subheader>Channels</Subheader>
          <ListItem primaryText="#general" />
        </List>
        <List style={styles.messages}>
          {this.state.messages.map((msg, idx) => {
            return (
              <div key={idx}>
                <ListItem
                  primaryText={msg.username}
                  secondaryText={msg.text}
                />
                <Divider />
              </div>
            )
          })}
          <Toolbar>
            <TextField hintText="Enter your message" fullWidth={true} value={this.state.msg} onChange={this.handleChange.bind(this)}/>
            <ToolbarGroup lastChild>
              <RaisedButton label="Send" primary={true} onTouchTap={this.handleSubmit.bind(this)}/>
            </ToolbarGroup>
          </Toolbar>
        </List>

      </div>
    );
  }
}
export default MyApp;
