import React from 'react'
import './MainDetail.scss'
import DetailImage from '../DetailImage/DetailImage'
import AllDetails from '../AllDetails/AllDetails'

const MainDetail = () => {
  return (
    <div className='MainDetail'>
        <DetailImage/>

        <AllDetails/>
    </div>
  )
}

export default MainDetail