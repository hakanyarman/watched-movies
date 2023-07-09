import React from 'react'

function Image(props) {
  return (
    <img src={props.imgUrl} alt='movie_image' className='image' style={{height:"300px", width:"300px"}} />
  )
}

export default Image