import React, { Component } from 'react'
import "./Footer.css";
import * as Icon from 'react-bootstrap-icons';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <a href='https://www.facebook.com/stefanDobos11/'><Icon.Facebook color='white' size={40} /></a>
                <a href='https://github.com/stefandobos?tab=repositories'><Icon.Github color='white' size={40} /></a>
                <a href='https://www.linkedin.com/in/stefan-dobos-07a567134/'><Icon.Linkedin color='white' size={40} /></a>
            </div>
            
        )
    }
}

export default Footer