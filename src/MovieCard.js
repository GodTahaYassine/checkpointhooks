import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MovieCard = ({movieInfo}) => {
    const [show, setShow] = useState(false)
    return (
            <div style={{width: '200px', height: 'auto'}} onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>  
                <Card.Img variant="top" src={movieInfo.posterURL}   />
                <Card.Body >
                    <Card.Title style={{color: 'silver'}}>{movieInfo.title}</Card.Title>
                    {show && <small className="text-muted">{movieInfo.description}</small>}
                </Card.Body>
                <Card.Footer>
                    <ReactStars value={movieInfo.rating}/>
                </Card.Footer>
            </div>
    )
}

export default MovieCard
