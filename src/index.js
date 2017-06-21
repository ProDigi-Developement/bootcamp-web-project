// Application entrypoint.

// Load up the application styles
require("../styles/styles.css");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from 'app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const App = () => (
  <MuiThemeProvider>
    <MyApp />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('react-root'));
