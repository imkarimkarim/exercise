import React, { Component } from 'react';
import axios from 'axios';
import Link from './Link';

class Links extends Component{
  state: {
    data: null
  }

  componentDidMount(){
    axios.get('/links')
      .then(res =>{
        console.log(res);
      })
      .catch(err =>{
        console.error(err);
      })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default Links;
