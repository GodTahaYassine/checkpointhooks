import React from 'react'

const Rating = (props) => {
    return (
        <div>
            <input style={{color:"blue"}} type="text" onChange={(e)=>props.handleRating(e.target.value)} placeholder="Filter by Rating"></input>
        </div>
    )
}

export default Rating
