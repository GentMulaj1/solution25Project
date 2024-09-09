import React from 'react'
import './BestAndNewShop.scss'
import { Link } from 'react-router-dom'

const BestAndNewShop = () => {
  return (
    <div className='BestAndNewShop'>
        <div className="BestAndNewShop__left">
            <div className="BestAndNewShop__left__inside">
                <p className="with44SemiBold">
                Best Sellers
                </p>
                <Link className='with16SemiBold'>
                Shop Now
                </Link>
            </div>
        </div>


        <div className="BestAndNewShop__right">
        <div className="BestAndNewShop__right__inside">
                <p className="with44SemiBold">
                New Arrivals
                </p>
                <Link className='with16SemiBold'>
                Shop Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BestAndNewShop