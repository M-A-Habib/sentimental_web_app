import React, { Component } from 'react';
import TwitterPost from '../common/twitterPost';
import SentimentalScore from '../common/sentimentalScore';


// const CombinedResult = (props) => {
//     return ( 
        // <div className='rowC'>
        //     <div><TwitterPost className = 'spacing' twitterpost={props.twitterpost}></TwitterPost></div>
        //     <div><SentimentalScore className = 'spacing' score={59}></SentimentalScore></div>
        // </div>
//      );
// }
 
// export default CombinedResult;

class CombinedResult extends React.Component {
    calculateSentiment = () => {
        const sentiment = require('sentiment');
        const Sentimentobj = new sentiment();

        var docs = Sentimentobj.analyze(this.props.twitterpost);
        return docs.score;
    }
    render() { 
        return (
            // <div className = 'rowC'>
            //     <div><TwitterPost className = 'postC' twitterpost={this.props.twitterpost}></TwitterPost></div>
            //     <div><SentimentalScore className = 'postC' score={this.calculateSentiment()}></SentimentalScore></div>
            // </div>
            <React.Fragment>
                <div className="card text-white bg-primary mb-3" style= {{maxWidth: "25rem"}}>
                    <div className="card-header">{"Sentimenal Score: " + this.calculateSentiment()}</div>
                    <div className="card-header">
                        <h8 className="card-text">{this.props.id}</h8>
                        <p className="card-text">{this.props.twitterpost}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CombinedResult;