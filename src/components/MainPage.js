import React, { Component } from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  
  filteredRobots = () => {
    const {robots, searchValue} = this.props;
    return robots
      .filter(r => r.name.toLowerCase().includes(searchValue.toLowerCase()));
  };
  
  render() {
    let {isPending} = this.props;
    return isPending
      ? <h1>Loading...</h1>
      : (
        <div className="tc">
          <Header/>
          <SearchBox searchChange={(e) => this.props.searchChanged(e)}/>
          <Scroll>
            <ErrorBoundary>
              <CardList data={this.filteredRobots()}/>
            </ErrorBoundary>
          </Scroll>
        </div>)
  }
}

export default MainPage;
