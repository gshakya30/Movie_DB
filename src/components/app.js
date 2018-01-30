import React, { Component } from 'react';
import HomeScreenHeader from './home_screen_header'
import HomeScreen from './home_screen'




export default class App extends Component {
  render() {
    return (
      <div>
        <HomeScreenHeader/>
        <HomeScreen/>
      </div>
    );
  }
}
