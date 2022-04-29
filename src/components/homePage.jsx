import React, { Component, useState, useEffect } from 'react';
import FeedBox from '../common/feedBox';
import SentimentalScore from '../common/sentimentalScore';
import TwitterPost from '../common/twitterPost';
import CombinedResult from './combineResult';
import Records from '../appData/records.json';
import * as fs from 'fs';

class HomePage extends React.Component {
    state = {
        twitterFeed: Records
    }

    // getJson() {
    //     // return fetch('https://twitter-stream-raw.s3.amazonaws.com/raw/2022/04/09/20/PUT-S3-qFeoj-4-2022-04-09-20-23-06-823a4864-0c0f-40a0-854b-e69b89b5bf94.json')
    //     return fetch('https://twitter-stream-raw.s3.amazonaws.com/raw/2022/04/09/20/PUT-S3-qFeoj-4-2022-04-09-20-23-06-823a4864-0c0f-40a0-854b-e69b89b5bf94.json')
    //       .then(response => response.json())
    //       .then(data => this.setState({twitterFeed: data}))
    //       .catch(error => {
    //         console.error(error);
    //       });
    // };

    updateList(){
        let newList = [{"data":{"attachments":{},"author_id":"1507176760634449922","id":"1519773493096714240","text":"life is so good!"},"includes":{"users":[{"id":"1507176760634449922","name":"Mohammad Habib","username":"Mohamma21465525"}]},"matching_rules":[{"id":"1519772640537456640","tag":""}]}, ...this.state.twitterFeed];
        this.setState({twitterFeed: newList});
        console.log(newList);
    }



    render() {
        // this.updateList();
        
        return (
            <React.Fragment>
                <div>
                    {/* <FeedBox></FeedBox> */}
                </div>
                <button onClick = {this.updateList.bind(this)} className="btn btn-outline-success my-2 my-sm-0">Refresh</button>
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