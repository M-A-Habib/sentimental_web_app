import React, { Component, useState, useEffect } from 'react';
import FeedBox from '../common/feedBox';
import SentimentalScore from '../common/sentimentalScore';
import TwitterPost from '../common/twitterPost';
import CombinedResult from './combineResult';
import Records from '../appData/records.json';

class HomePage extends React.Component {
    state = {
        twitterFeed: []
    }

    getJson() {
        return fetch('https://twitter-stream-raw.s3.amazonaws.com/raw/2022/04/09/20/PUT-S3-qFeoj-4-2022-04-09-20-23-06-823a4864-0c0f-40a0-854b-e69b89b5bf94.json')
          .then(response => response.json())
          .then(data => this.setState({twitterFeed: data}))
          .catch(error => {
            console.error(error);
          });
    };

    // MyComp = () => {
    //     const [list, setList] = useState([]);
      
    //     useEffect(() => {
    //       this.getJson().then(list => setList(list));
    //     }, [])}

    render() {
        this.getJson();
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