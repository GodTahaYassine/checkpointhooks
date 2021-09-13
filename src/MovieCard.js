import React from 'react'
import { Card , CardGroup} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MovieCard = ({movieInfo}) => {
    return (
        <CardGroup style={{width: '200px', height: '200px' }}>
            <Card>  
                <Card.Img variant="top" src={movieInfo.posterURL}  />
                <Card.Body >
                    <Card.Title>{movieInfo.title}</Card.Title>
                    <small className="text-muted">{movieInfo.description}</small>
                </Card.Body>
                <Card.Footer>
                    <ReactStars value={movieInfo.rating}/>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default MovieCard
