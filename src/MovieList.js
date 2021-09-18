import React from 'react'
import MovieCard from './MovieCard'
const MovieList = (props) => {
    return (
        <div style={{display: 'grid' ,gridTemplateColumns:'repeat(4,1fr)',gridAutoRows:'auto' }}>
            {props.list.length ?props.list.map(elm => <MovieCard movieInfo={elm}/>) :<span>No Matches Found</span>}
        
        </div>
    )
}

export default MovieList
