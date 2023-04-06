import React from 'react'

function BlockImage(props) {
    return (
        <div className={`${props.className} block-image`}
            style={{ backgroundImage: `url(${props.image})`, }}>
            <img className='block-image__image' style={{ visibility: 'hidden' }} src={props.image} alt="" />
        </div>
    )
}

export default BlockImage