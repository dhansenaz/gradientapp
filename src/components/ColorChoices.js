import React, { Component } from "react";

import '../components/colorchoices.css';

export default class ColorChoices extends Component {
    chooseColor(color) {
        this.props.onChoose(color);
    }

    render(){
        return(
            <div className='choices-container'>
                {this.props.colorChoices.map(color => 
                    <button className={`code-button ${color}`} onClick={() => this.chooseColor(color)}>{color}</button>   
                )}
            </div>
        )
    }
}