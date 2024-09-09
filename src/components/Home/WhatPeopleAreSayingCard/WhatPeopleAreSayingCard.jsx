import React from 'react'
import './WhatPeopleAreSayingCard.scss'

const WhatPeopleAreSayingCard = ({
    title,
    dsc,
    name,
    time
}) => {
  return (
    <div className='WhatPeopleAreSayingCard'>
        <span className="WhatPeopleAreSayingCard__stars"></span>

        <div className="WhatPeopleAreSayingCard__2">
            <p className="with20SemiBold">
            {title}
            </p>

            <p className="with16Regular">
            {dsc}
            </p>
        </div>

        <div className="WhatPeopleAreSayingCard__3">
            <p className="with16SemiBold">
            {name}
            </p>

            <p className="with12Regular">
            {time}
            </p>
        </div>

    </div>
  )
}

export default WhatPeopleAreSayingCard