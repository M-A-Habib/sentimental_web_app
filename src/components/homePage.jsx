import React, { Component } from 'react';
import FeedBox from '../common/feedBox';
import SentimentalScore from '../common/sentimentalScore';
import TwitterPost from '../common/twitterPost';
import CombinedResult from './combineResult';
import Records from '../appData/records.json';

class HomePage extends React.Component {
    state = {
        twitterFeed: Records
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <FeedBox></FeedBox>
                </div>
                {/* {this.state.twitterFeed.map(twitterPost => (
                    <CombinedResult id = {twitterPost._id} key = {twitterPost._id} twitterpost = {twitterPost.text}></CombinedResult>
                ))} */}
                {this.state.twitterFeed.map(twitterPost => (
                    <CombinedResult id = {"@" + twitterPost.includes.users[0].username + " "} key = {twitterPost.data.id} twitterpost = {twitterPost.data.text}></CombinedResult>
                ))}
            </React.Fragment>
        );
    }
}
 
export default HomePage;