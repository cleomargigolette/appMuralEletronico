import React, { Component } from "react";
import "./buttonFormulario.css";

export class ButtonFormulario extends Component{
    render(){
        return<button className="buttonFormulario" type={this.props.type} onClick={this.props.onClick}>{this.props.name}</button>
    }
}