import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robotData } from '../robotData';
import './App.css';
import { setSearchField } from '../actions';

class App extends Component {
  state = {
    robots: []
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(robots => this.setState({robots}));
  }
  
  onSearchChange = event => {
    this.props.searchChanged(event.target.value);
    this.setState({robots: robotData});
  };
  
  render() {
    let {robots} = this.state;
    let { searchValue } = this.props;
    robots = this.state.robots
                 .filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));
    return !robots.length
      ? <h1>Loading...</h1>
      : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList data={robots}/>
            </ErrorBoundary>
          </Scroll>
        </div>)
  }
}

const mapStateToProps = ({searchValue}) => ({
  searchValue
});

const mapDispatchToProps = dispatch => ({
  searchChanged: value => dispatch(setSearchField(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);