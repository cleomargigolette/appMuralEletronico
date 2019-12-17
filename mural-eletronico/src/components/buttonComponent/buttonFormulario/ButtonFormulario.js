import React, { Component } from "react";
import "./buttonFormulario.css";

export class ButtonFormulario extends Component{
    render(){
        return<button className="buttonFormulario">{this.props.name}</button>
    }
}