import React, { Component } from 'react';
import { HousesList } from './components/HousesList';
import NewRoomForm from './components/NewRoomForm';
import { houseApi } from './rest/HouseApi';
import { House } from './components/House';

class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
        <NewRoomForm />
      </div>
    )
  }
}

export default App;
