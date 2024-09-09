import React from 'react'
import './WhatWeOffer.scss'
import WhatWeOfferCard from '../WhatWeOfferCard/WhatWeOfferCard'
import icon1 from '../../../assets/Home/WhatWeOffer/phone-call.svg'
import icon2 from '../../../assets/Home/WhatWeOffer/Return.svg'
import icon3 from '../../../assets/Home/WhatWeOffer/guarantee.svg'
import icon4 from '../../../assets/Home/WhatWeOffer/truck.svg'

const WhatWeOffer = () => {

    const WhatWeOfferData = [
        {
            id: 1,
            icon: icon1,
            title: "24/7 Customer Service",
            dsc: "We're here to help you with any questions or concerns you have, 24/7."
        },

        {
            id: 2,
            icon: icon2,
            title: "14-Day Money Back",
            dsc: "If you're not satisfied with your purchase, simply return it within 14 days for a refund."
        },

        {
            id: 3,
            icon: icon3,
            title: "Our Guarantee",
            dsc: "We stand behind our products and services and guarantee your satisfaction."
        },

        {
            id: 4,
            icon: icon4,
            title: "Shipping Worldwide",
            dsc: "We ship our products worldwide, making them accessible to customers everywhere."
        }
    ]

  return (
    <div className='WhatWeOffer'>
        {
            WhatWeOfferData.map((item) => (
                <WhatWeOfferCard 
                key={item.id}
                icon={item.icon}
                title={item.title}
                dsc={item.dsc}
                />
                
            ))
        }
    </div>
  )
}

export default WhatWeOffer