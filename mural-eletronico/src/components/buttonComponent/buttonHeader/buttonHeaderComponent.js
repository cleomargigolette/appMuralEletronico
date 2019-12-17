import React, { Component } from 'react';
import './ButtonHeader.css'

export class ButtonHeader extends Component {

    render(){
    return <button className='buttonHeader' type="button" onClick={this.props.onClick} >{this.props.name}</button>
    }
}