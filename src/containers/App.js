import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import { robotData } from '../robotData';
import './App.css';

class App extends Component {
  state = {
    robots: [],
    searchValue: ''
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(robots => this.setState({robots}));
  }
  
  onSearchChange = event => {
    this.setState({searchValue: event.target.value});
    this.setState({robots: robotData});
  };
  
  render() {
    let {robots, searchValue} = this.state;
    robots = this.state.robots
                 .filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));
    return !robots.length
      ? <h1>Loading...</h1>
      : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList data={robots}/>
          </Scroll>
        </div>)
  }
}

export default App;