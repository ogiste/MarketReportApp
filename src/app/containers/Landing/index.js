import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from "@material-ui/core/Container";
import Dashboard from "../../components/Dashboard";

import './index.css';

// import usabilityImage from 'Images/usability.png';

@connect((state) => ({
    ...state
}), (dispatch) => ({}))
export default class Landing extends Component {
    state = {
        counter: 0,
    };

    onButtonPressed = () => {
        let {counter} = this.state;
        this.setState({
            counter: ++counter,
        });
    };

  render() {
    const { counter } = this.state;
    return (
        <Container maxWidth="md">
            <Dashboard/>
        </Container>
    );
  }
}
