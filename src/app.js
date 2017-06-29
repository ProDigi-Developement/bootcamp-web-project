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
    super();
    this.state = {
      open: false,
      username: 'tharshan',
      messages: []
    };
  }
  componentWillMount() {
    let api = new API();
    api.login(resp => {
      api.getMessages(resp => {
        this.setState({messages:Object.values(resp)});
      });
    });
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose(username) {
    this.setState({open: false, username: username});
  };

  render() {
    return (
      <div style={styles.container}>
        <EnterModal open={this.state.open} handleClose={this.handleClose.bind(this)} />
        <List>
          <Subheader>Channels</Subheader>
          <ListItem primaryText="#general" />
        </List>
        <List style={styles.messages}>
          {this.state.messages.map((msg) => {
            return (<div><ListItem
                    primaryText={`${msg.username}`}
                    secondaryText={`${msg.text}`}
                  />
                  <Divider />
                  </div>)
          })}
          <Toolbar>
            <TextField hintText="Enter your message" fullWidth={true} />
            <ToolbarGroup lastChild>
              <RaisedButton label="Send" primary={true} />
            </ToolbarGroup>
          </Toolbar>
        </List>

      </div>
    );
  }
}
export default MyApp;
