import React from 'react'
import './WhatWeOfferCard.scss'

const WhatWeOfferCard = ({
    icon,
    title,
    dsc
}) => {
  return (
    <div className='WhatWeOfferCard'>
        <div className="WhatWeOfferCard__icon"
            style={{
                content: `url(${icon})`
            }}
        ></div>

        <div className="WhatWeOfferCard__texts">
            <p className="with20SemiBold">
            {title}
            </p>

            <p className="with14Regular">
            {dsc}
            </p>
        </div>

    </div>
  )
}

export default WhatWeOfferCard