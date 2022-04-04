import React, { Component } from 'react';

const FeedBox = () => {
    return ( 
        <React.Fragment>
            <form action="">
                <div className = 'postC' style= {{marginBottom: '30px'}}>
                    <div>
                        <input style = {{ width: '300px'}} type="text" className="form-control" id="exampleTwitterPost" aria-describedby="twitterHelp" placeholder="What's on your mind?"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Post</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
     );
}
 
export default FeedBox;