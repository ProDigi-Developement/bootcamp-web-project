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
  render() {
    return (
      <div style={styles.container}>
        <List>
          <Subheader>Channels</Subheader>
          <ListItem primaryText="#general" />
        </List>
        <List style={styles.messages}>
          <ListItem
            primaryText="@username"
            secondaryText={"this is my message"}
          />
          <Divider />
          <ListItem
            primaryText="@username"
            secondaryText={"this is my message"}
          />
          <Divider />
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
