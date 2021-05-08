import React from 'react';
import Router from '../../router/Router';
import AppBar from '../AppBar';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <AppBar />
        <Router />
      </>
    );
  }
}

export default App;
