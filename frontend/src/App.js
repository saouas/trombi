import React from 'react';

import logo from './logo.svg';
import './App.css';

import Container from './components/Container';
import UserCard from './components/UserCard/UserCard';
import Title from './components/Title';
import Pager from './components/Pager/Pager';
import UserList from './components/UserList';
import { NavigationContextProvider } from './context/NavigationContext';

function App() {
  return (
    <div className="App">
      <NavigationContextProvider value={{ offset: 0, page: 1}}>
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
