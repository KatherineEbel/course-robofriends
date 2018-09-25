import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { setSearchField } from '../actions';
import { requestRobots } from '../actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainPage {...this.props}/>
    );
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