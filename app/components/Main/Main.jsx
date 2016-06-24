import styles from './_Main.scss';

import classnames from 'classnames';
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect }  from 'react-router';


class Main extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(styles);
  }

  render() {
      return(
        <div className = {styles.main}>main1</div>
      )
  }

}

export default Main;
