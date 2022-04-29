import React, { Component } from 'react';

const FeedBox = (props) => {
    return ( 
        <React.Fragment>
            <form action="">
                <div className = 'postC' style= {{marginBottom: '30px'}}>
                    <div>
                        <input ref = {props.reference} style = {{ width: '300px'}} type="text" className="form-control" id="exampleTwitterPost" aria-describedby="twitterHelp" placeholder="What's on your mind?"/>
                    </div>
                    <div>
                        <button onClick = {props.handleClick} className="btn btn-outline-success my-2 my-sm-0">Post</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
     );
}
 
export default FeedBox;