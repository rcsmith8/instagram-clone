import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import "./Post.css"
import postimage from "../../images/dp6.png"



class Post extends Component{
    constructor(props) {
        super(props);
 this.state = { };
    }

render() {
    return (
<div className="post__container">

    
    <div className="post__container">
        <Avatar className="post__image" src="" />
        <div className="post__username">Username</div>
    </div>
    <div>
    <img src={postimage} width="610px"/>
    </div>
    <div></div>
    <div></div>

    
</div>
    )
    }
}
export default Post;