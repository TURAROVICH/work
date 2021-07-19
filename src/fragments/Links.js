import React from 'react'
import Arrow from '../assets/Arrow.png'
import { Link } from 'react-router-dom'
export default ({route2,lastRoute}) => {
    return (
        <div className="links">
        <Link to={"/"}>Main</Link> <img src={Arrow} alt="" />
         <Link to={route2.path}>{route2.name}</Link><img src={Arrow} alt="" />
         <span>{lastRoute}</span>
    </div>
    )
}