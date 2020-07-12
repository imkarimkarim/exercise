import React, { Component } from 'react';
import axios from 'axios';
import Avatars from './Avatars';

class LastPosts extends Component {
    state = {
        data:{
            posts: []
        }
        
    }
    componentDidMount(){
        axios.get("https://baconipsum.com/api/?type=meat-and-filler")
            .then(res =>{
                this.setState({data: {posts: res.data}})
            })
    }
    render(){
        const posts = this.state.data.posts;
        const postsList = posts.map(post =>{
            return(
                <div className="container kBoxContainer">
                <div className="row container">
                    <div className="col s12 m12">
                    <div className="card grey darken-4 z-depth-2">
                        <div className="card-content white-text">
                        <span className="card-title">{<Avatars />}</span>
                        <p>{post}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )
        })
        return(
            <div>
                {postsList}

            </div>
        )
    }
}

export default LastPosts