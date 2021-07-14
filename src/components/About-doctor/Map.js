import React,{Component} from 'react'
import geolocation from '../../assets/geolocation.png'
import GoogleMapReact from 'google-map-react';
import './map.css'
import marker from '../../assets/marker.png'
const GEO = ({ img }) => <div>{img}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }
}

export default () => {
    const data = {
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
    }
    return(
        <>
        <div className="about-title">
        <img style={{width:16,height:24}} src={geolocation} alt="" /><span>Specializes In</span>
    </div>

    <div className="adsres-container">
        <div className="addres">
            <div className="title">Country:</div>
            <div className="des">South Korea</div>
        </div>

        <div className="addres">
            <div className="title">City:</div>
            <div className="des">Nonhyeon-ro</div>
        </div>

        <div className="addres">
            <div className="title">Address:</div>
            <div className="des">N/A</div>
        </div>
    </div>


    <div style={{ height: 440, width: '100%',margin:'30px 0' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBomDM_KJHqCCY7pVG9QiaD6Z1Xbn2pnBc' }}
          defaultCenter={data.center}
          defaultZoom={data.zoom}
        >
          <GEO
            lat={59.955413}
            lng={30.337844}
            img={<img src={marker} ></img>}
          />
        </GoogleMapReact>
      </div>
    </>
    )
}




