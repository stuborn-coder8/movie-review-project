import'./Movie.css'
import React from 'react'

function Movie(props) {
  return (
    <div className="movie">
        <img src={props.img}>
        


        </img>
        <p>
            {props.title}

        </p>
        <p>
            {props.year}

        </p>

    </div>
  )
}

export default Movie