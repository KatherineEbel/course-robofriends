import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robotData } from './robotData';

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
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList data={robots}/>
    </div>
    )
  }
}

export default App;