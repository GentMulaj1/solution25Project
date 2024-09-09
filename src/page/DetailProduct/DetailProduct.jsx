import React from 'react'
import './DetailProduct.scss'
import Navbar from '../../components/shared/Navbar/Navbar'
import Footer from '../../components/shared/Footer/Footer'
import RouteToDetail from '../../components/shared/RouteToDetail/RouteToDetail'
import RelatedProducts from '../../components/DetailProduct/RelatedProducts/RelatedProducts'
import WhatWeOfferDetail from '../../components/DetailProduct/WhatWeOfferDetail/WhatWeOfferDetail'
import Specifications from '../../components/DetailProduct/Specifications/Specifications'
import MainDetail from '../../components/DetailProduct/MainDetail/MainDetail'

const DetailProduct = () => {
  return (
    <div className='DetailProduct'>
        <Navbar/>

        

        <div className="DetailProduct__inside">
        <RouteToDetail />
        <MainDetail/> 

        <Specifications/>
        <WhatWeOfferDetail/>
        <RelatedProducts/>

        </div>

        <Footer />
    </div>
  )
}

export default DetailProduct