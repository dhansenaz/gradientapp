import React, { Component } from "react";

import '../components/colorchoices.css';

export default class ColorChoices extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className='choices-container'>
                <button className='code-button all'>all</button>
                <button className='code-button purple'>purple</button>
                <button className='code-button blue'>blue</button>
                <button className='code-button green'>green</button>
                <button className='code-button red'>red</button>
                
            </div>
        )
    }
}