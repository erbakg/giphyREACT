import React, { Component } from 'react'

function Odinochka(props){
    return(
        <div>
            <img src={props.data.picture.large} />
            <h3>{props.data.name.first + " " +props.data.name.last}</h3>
        </div>
    )
}
export default Odinochka
