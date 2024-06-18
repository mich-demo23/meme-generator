/* eslint-disable react/prop-types */

import icon from '../assets/map-pin-fill.svg'

function  Travel (props)  {


    return(
        <div className="travel">
            <div><img src={props.image} className="travel-image"/></div>
            
            <div className="travel-info">
                <div className="travel-location">
                <img src={icon} className="location-tag" />
                <p className='travel-location-name'>{props.location}</p>

                {props.googleMapsUrl && <a href={props.googleMapsUrl} target='_blank' className='link-google'>View on Google Maps</a>}

                </div>
                <h1 className='travel-title'>{props.title}</h1>
                <h5 className='travel-date'>{props.startdate} - {props.enddate}</h5>
                <p className='travel-description'>{props.description}</p>
            </div>
                <hr />
        </div>

    )
 }

 export default Travel