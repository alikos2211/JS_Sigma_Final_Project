import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RatingBar(props) {
    return (
        <div className={`${props.className} rating-bar`}>
            {[...Array(props.rating)].map((e, i) => (
                <FontAwesomeIcon key={i} className="rating-bar__star" icon={faStar} />
                // TODO: solve this star problem
            ))}
        </div>
    )
}

export default RatingBar