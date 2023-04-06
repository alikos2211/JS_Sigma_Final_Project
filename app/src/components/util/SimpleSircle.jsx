import React from 'react'

function SimpleSircle(props) {
    return (
        <div className='simple-circle'>
            <h1 className='simple-circle__title'>{props.title}</h1>
            <p className='simple-circle__subtitle'>{props.subtitle}</p>
        </div>
    )
}

export default SimpleSircle