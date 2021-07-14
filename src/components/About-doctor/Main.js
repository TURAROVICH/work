import React from 'react'
import About from './About'
import Carousel from './Carousel'
import Map from './Map'
import Reviews from './Reviews'

import {
    useParams
  } from "react-router-dom";


export default function Main(){
    let { id } = useParams();
    console.log(id);
    return(
        <div className="container">
            <About/>
            <Carousel/>
            <Map/>
            <Reviews/>
        </div>
    )
}