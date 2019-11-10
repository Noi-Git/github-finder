import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   // change state after loading
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // reset the state after axios makes request and get response
  //   // then set users to the data from API. Then set loading back to false
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search Github users
  searchUsers = async text => {
    // console.log(text);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    return (
      <div>
        <Navbar title="Github Finder" icon="fa fa-pie-chart" />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          <Users loading={this.state.loeading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
