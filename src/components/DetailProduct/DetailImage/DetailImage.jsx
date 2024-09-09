import React from 'react'
import './DetailImage.scss'

import image1 from '../../../assets/DetailProduct/DetailImage/image-1.webp'
import image2 from '../../../assets/DetailProduct/DetailImage/image-2.webp'
import image3 from '../../../assets/DetailProduct/DetailImage/image-3.webp'
import image4 from '../../../assets/DetailProduct/DetailImage/image-4.webp'

const DetailImage = () => {

    const DetailImageData = [
        {
            id: 1,
            imageDetail: image1
        },
        {
            id: 2,
            imageDetail: image2
        },
        {
            id: 3,
            imageDetail: image3
        },
        {
            id: 4,
            imageDetail: image4
        }
    ]

  return (
    <div className='DetailImage'>
        {
            DetailImageData.map((item) => (
                <div 
                    key={item.id}
                    className='imageInside'
                    style={{
                        backgroundImage: `url(${item.imageDetail})`
                    }}
                ></div>
            ))
        }
        
    </div>
  )
}

export default DetailImage