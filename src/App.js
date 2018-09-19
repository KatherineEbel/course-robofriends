import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robotData } from './robotData';
import './App.css';

class App extends Component {
  state = {
    robots: robotData,
    searchValue: ''
  };
  
  onSearchChange = event => {
    this.setState({searchValue: event.target.value});
    this.setState({robots: robotData});
  };
  
  render() {
    let {robots, searchValue} = this.state;
    robots = this.state.robots.filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList data={robots}/>
    </div>
    )
  }
}

export default App;