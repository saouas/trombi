import React from 'react';

import './App.css';

import Container from './components/Container';
import Title from './components/Title';
import Pager from './components/Pager/Pager';
import UserList from './components/UserList';
import { NavigationContextProvider } from './context/NavigationContext';

function App() {
  return (
    <div className="App">
      <NavigationContextProvider>
        <Container>
          <Title title="My Trombi'"/>
          <UserList/>
          <Pager/>
        </Container>
      </NavigationContextProvider>
    </div>
  );
}

export default App;
