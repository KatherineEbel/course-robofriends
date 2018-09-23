import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions';
import { requestRobots } from '../actions';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  
  render() {
    let {robots, isPending, searchValue} = this.props;
    robots = robots
                 .filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));
    return isPending
      ? <h1>Loading...</h1>
      : (
        <div className="tc">
          <Header/>
          <SearchBox searchChange={(e) => this.props.searchChanged(e)}/>
          <Scroll>
            <ErrorBoundary>
              <CardList data={robots}/>
            </ErrorBoundary>
          </Scroll>
        </div>)
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchRobots.searchValue,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  searchChanged: event => dispatch(setSearchField(event.target.value)),
  onMount: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);