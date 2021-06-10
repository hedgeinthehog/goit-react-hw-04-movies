import React from 'react';
import Router from '../../router/Router';
import AppBar from '../AppBar';
import Container from '../Container';

class App extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <AppBar />
        <Router />
      </Container>
    );
  }
}

export default App;
