import React, { Component } from 'react';
import FeedBox from '../common/feedBox';
import SentimentalScore from '../common/sentimentalScore';
import TwitterPost from '../common/twitterPost';
import CombinedResult from './combineResult';


class HomePage extends React.Component {
    state = {
        twitterFeed:[
            {text: "This is a great day", _id: 1},
            {text: "This is a bad day", _id: 2},
            {text: "I just got a new dog", _id: 3},
            {text: "My dog pooped on the couch", _id: 4},
            {text: "Dobby is free! :D", _id: 5},
            {text: "Dobby is free! :D", _id: 6},
            {text: "Dobby is free! :D", _id: 7},
            {text: "Dobby is free! :D", _id: 8},
            {text: "Dobby is free! :D", _id: 9},
            {text: "Dobby is free! :D", _id: 10},
            {text: "Dobby is free! :D", _id: 11},
            {text: "Dobby is free! :D", _id: 12}
        ]
    }
    render() { 
        return (
            <React.Fragment>
                <div>
                    <FeedBox></FeedBox>
                </div>
                {this.state.twitterFeed.map(twitterPost => (
                    <CombinedResult id = {twitterPost._id} key = {twitterPost._id} twitterpost = {twitterPost.text}></CombinedResult>
                ))}
            </React.Fragment>
        );
    }
}
 
export default HomePage;