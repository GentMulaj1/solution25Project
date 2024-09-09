import React from 'react'
import './RouteToDetail.scss'
import { RiArrowRightWideFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const RouteToDetail = () => {
  return (
    <div className='RouteToDetail'>
        <Link className="with14Regular">
        Homepage
        </Link>
        <RiArrowRightWideFill  />
        <Link className="with14Regular">
        Women
        </Link>
        <RiArrowRightWideFill  />
        <Link className="with14Regular with14RegularChangeColor__RouteToDetail">
        Leather boots with tall leg
        </Link>
    </div>
  )
}

export default RouteToDetail