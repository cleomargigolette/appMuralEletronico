import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonHeader.css';

export class ButtonHeader extends Component {

    render(){
    return <button className='buttonHeader'><Link to={this.props.route} >{this.props.name}</Link></button>
    }
}
