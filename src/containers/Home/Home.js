import React, { Component } from 'react';
import axios from '../../themoviedb';

export default class Home extends Component {
    componentDidMount() {
        let value = 'Game of Thrones'
        let key= '2316e7e3b848b29f201d3e758ba6af64'
        axios.get(`/configuration?api_key=${key}`)
        .then(response => {
            console.log(response);            
        })
    }
    
    render() {
        return (
            <div>
                {/* <img src="https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" alt="Game of Thrones"/> */}
            </div>
            
        )
    }
}
