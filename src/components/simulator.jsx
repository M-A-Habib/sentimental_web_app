import React, { Component } from 'react';
import FeedBox from '../common/feedBox';
import CombinedResult from './combineResult';

class Simulator extends React.Component {
    state = {
        text: "",
        score: 0
    };

    textInput = React.createRef();

    onClickHandler = (event) => {
    event.preventDefault();
    // console.log("This is manual", this.textInput.current.value);
    this.setState({text: this.textInput.current.value});
    
};

    render() {
        return (
            <React.Fragment>
                <h1>Simulator</h1>
                <FeedBox handleClick = {this.onClickHandler.bind(this)} reference = {this.textInput}></FeedBox>
                <CombinedResult id  = {"Team 32 "} twitterpost = {this.state.text}></CombinedResult>
            </React.Fragment>
        );
    }
}
 
export default Simulator;