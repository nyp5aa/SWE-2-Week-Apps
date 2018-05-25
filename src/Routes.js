import React, { Component } from 'react';
import './App.css';
import App from './App.js';
import Results from './Results.js';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Redirect to='/Home' />
                    <Route path="/Home" component={App}/>
                    <Route path="/People" component={Results}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes