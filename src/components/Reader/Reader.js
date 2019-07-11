import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import publications from '../../data/publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';

const createURL = (props, index) => {
  props.history.push({
    pathname: '/articles',
    search: `?item=${index}`,
  });
};

const getIndexFromUrl = props => {
  return Number(queryString.parse(props.location.search).item);
};

export default class Reader extends Component {
  state = {
    index: 1,
  };

  propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { index } = this.state;
    const { location } = this.props;

    if (location.pathname !== '/articles') {
      createURL(this.props, index);
    }

    const currentIndex = getIndexFromUrl(this.props);

    this.setState({ index: currentIndex });
  }

  componentDidUpdate(prevProps, prevState) {
    const { index } = this.state;

    if (prevState.index !== index) {
      createURL(this.props, index);
    }
  }

  previosArticle = () => {
    this.setState(prevState => ({
      index: prevState.index - 1,
    }));
  };

  nextArticle = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Publication item={publications[index - 1]} />
        <Counter index={index} length={publications.length} />
        <Controls
          prev={this.previosArticle}
          next={this.nextArticle}
          index={index}
        />
      </div>
    );
  }
}
