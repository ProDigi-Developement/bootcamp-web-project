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
import API from 'utils/api';
import EnterModal from 'components/enter_modal';
import MobileTearSheet from 'components/tearsheet';
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
};

class MyApp extends Component {
  constructor() {
    super();
    this.api = null;
    this.state = {
      open: false,
      username: 'tharshan',
      messages: [],
      msg:''
    };
  }
  componentWillMount() {
    this.api = new API();
    this.api.login(resp => {
      this.loadMessages();
    });
  }
  loadMessages() {
    this.api.getMessages(resp => {
      this.setState({messages:Object.values(resp)});
    });
  }
  handleOpen() {
    this.setState({open: true});
  };

  handleClose(username) {
    this.setState({open: false, username: username});
  };
  handleChange(event) {
    this.setState({
      msg: event.target.value,
    });
  }
  handleSubmit(event) {
    this.api.sendMessage(this.state.username, this.state.msg, cb => {
      this.loadMessages();
      this.setState({
        msg: ''
      });
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <MobileTearSheet width={200}>
        <EnterModal open={this.state.open} handleClose={this.handleClose.bind(this)} />
          <List>
            <Subheader>Channels</Subheader>
            <ListItem primaryText="#general" />
          </List>
          </MobileTearSheet>
          <MobileTearSheet width={800}>
          <List className="chat-container">
            <div className="chat-list">{this.state.messages.map((msg) => {
              return (<div><ListItem
                      primaryText={`${msg.username}`}
                      secondaryText={`${msg.text}`}
                      className="chat"
                    />
                    <Divider />
                    </div>)
            })}</div>
            <Toolbar className="chat-input">
              <TextField hintText="Enter your message" fullWidth={true} value={this.state.msg} onChange={this.handleChange.bind(this)}/>
              <ToolbarGroup lastChild>
                <RaisedButton label="Send" primary={true} onTouchTap={this.handleSubmit.bind(this)} style={{marginBottom:15}}/>
              </ToolbarGroup>
            </Toolbar>
          </List>
        </MobileTearSheet>
      </div>
    );
  }
}
export default MyApp;
