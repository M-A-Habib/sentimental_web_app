import React, { Component } from 'react';
import FeedBox from '../common/feedBox';
import SentimentalScore from '../common/sentimentalScore';
import TwitterPost from '../common/twitterPost';
import CombinedResult from './combineResult';
import Records from '../appData/records.json';

class HomePage extends React.Component {
    state = {
        // twitterFeed:[
        //     {text: "@y2_kazoo Some jackass wearing a Twister mat just threw these at me https://t.co/6Pvi4Zvi0e", _id: '1511907232060825604'},
        //     {text: "RT @a_kaeyada: 🌸Small kimono!👘 https://t.co/YiChXVuYyr", _id: '1511907232094765063'},
        //     {text: "RT @EszanEdit: 139 kalbim aşk'ile senin oldu \n#İlhanŞen             OzanKorfalı\n#BurcuÖzberk     EsraErten\n#EsZan                 AşkMantık…", _id: '1511907236255260673'},
        //     {text: "RT @iIoveboy: https://t.co/jv5GyMPvLO", _id: '1511907236255313924'},
        //     {text: "わたしはアルコール分解できない体質なのでコップ一杯で吐いて倒れるので絶対酒は飲みません…", _id: '1511907236289060870'}
        // ]
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