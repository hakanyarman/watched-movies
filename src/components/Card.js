import React from 'react'
import Image from './Image'

function Card(props) {
  return (
    <div style={{border: "5px solid red" , marginBottom: "5em"}}>
        <h3 id='imageTitle'>{props.title}</h3>
        <Image imgUrl={props.imgUrl} />
        <h4>Konusu</h4>
        <p id='details'>{props.details}</p>
    </div>
  )
}

export default Card