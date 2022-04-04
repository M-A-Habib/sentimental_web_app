import React, { Component } from 'react';

const SentimentalScore = (props) => {
    return ( 
        <React.Fragment>
            <p>Sentimental Score: {props.score}</p>
        </React.Fragment>
     );
}
 
export default SentimentalScore;