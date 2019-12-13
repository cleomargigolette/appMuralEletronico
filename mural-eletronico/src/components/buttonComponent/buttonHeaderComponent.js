import React, { Component } from 'react';
import './ButtonHeader.css'

export class ButtonHeader extends Component {

    render(){
        return <button className='buttonHeader'>{this.props.name}</button>
    }
}