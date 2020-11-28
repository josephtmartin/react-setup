import React, { Component } from 'react';
import showData from '../../helpers/data/showsData';

export default class KnowTheNetwork extends Component {
  state = {
    shows: [],
  }

  componentDidMount() {
    this.getShows();
  }

  getShows = () => {
    showData.getMostPopularShows().then((response) => {
      console.warn(response);
      this.setState({
        shows: response,
      });
    });
  }

  render() {
    return (
      <h2>know the network</h2>
    );
  }
}
