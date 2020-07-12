import React, { Component } from 'react'
import axios from 'axios'

class Avatarts extends Component{
    state = {
        data: {
            avatar: null,
        }
    }
    
    componentDidMount(){    
        
        if(typeof(this.props.match) != 'undefined' ) {
            axios.get("https://avatars.dicebear.com/api/bottts/" + this.props.match.params.avatar + ".svg")
            .then(res =>{
                this.setState({
                    data: {
                        avatar: res.config.url
                    }
                })
            })
        }
        else{
            axios.get("https://avatars.dicebear.com/api/bottts/" + this.randomNum() + ".svg")
            .then(res =>{
                this.setState({
                    data: {
                        avatar: res.config.url
                    }
                })
            })
        }

    }
    
    randomNum = () =>{
        console.log(this.props)
        return Math.floor(Math.random() * 200);
    }
    render(){

        const retAvatar = (typeof(this.props.match) != "undefined")
        ? (
            <img className="responsive-img" width="400px" src={this.state.data.avatar} alt="loading avatar..." />
        )
        : (
            <img className="responsive-img left" width="50px" src={this.state.data.avatar} alt="loading avatar..." />
        )

        return(
            <div className="avatar container center">
                {retAvatar}
            </div>
            
        )
    }
}

export default Avatarts;