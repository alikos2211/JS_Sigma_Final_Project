import React from 'react'

import { faCircleArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BlockImage from 'components/util/BlockImage'

function NewsCard(props) {
    return (
        <div className={`${props.className} news-card`}>
            <div className="news-card__image">
                <p className='news-card__date'>{props.item.date}</p>
                <BlockImage className='img' image={props.item.image} alt="" />
            </div>
            <div className="news-card__text">
                <h5 className='news-card__user'><FontAwesomeIcon className='user-icon' icon={faUser}/> By {props.item.user}</h5>
                <h3 className='news-card__title'>{props.item.title}</h3>
                <p className='news-card__description'>{props.item.description}</p>
                <button className='news-card__button btn btn--accent'>Read More <FontAwesomeIcon icon={faCircleArrowRight}/></button>
            </div>
        </div>
    )
}

export default NewsCard