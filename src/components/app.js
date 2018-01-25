import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import UserList from '../containers/user_list'
import Login from '../containers/login_page'
import HomeScreen from '../containers/home_screen'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SearchBar />
        <UserList/>
        <Login/> */}
        <HomeScreen/>
      </div>
    );
  }
}
