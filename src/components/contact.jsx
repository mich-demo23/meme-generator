/* eslint-disable react/prop-types */

import '../App.css';

import trollface from './assets/trollface.png'
import phoneicon from './assets/phone-fill.svg'
import mailicon from './assets/envelope.svg'
import starempty from './assets/star-empty.svg'
import starfill from './assets/star-fill.svg'
import { useState } from 'react';



function Contact () {

    const [contact, setContact] = useState({
        firstname: "John",
        lastname: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavourite : false
      })
      
    
      function toggleFavourite () {
      setContact(prevContact =>( {
          ...prevContact,
            isFavourite : !prevContact.isFavourite
        }  ))
    
        console.log("Toggle Favourite")
      }



      function Star (props) {

      const star = props.isFilled ? starfill : starempty

        return (
          <img  src= {star}
          className='star' 
          onClick={props.handleClick}

          />
        )
      }

    return(
        <div className='contact-card'>

        <img src ={trollface}  />
        <h3>{contact.firstname} {contact.lastname}</h3>
        <div className='info-group'>
       <Star 
          isFilled = {contact.isFavourite}
          handleClick={toggleFavourite}

       />
        </div>

        <div className='info-group'>
          <img src={phoneicon} />
          <p>{contact.phone}</p>
        </div>

        <div className='info-group'>
          <img src={mailicon}/>
          <p>{contact.email}</p>
        </div>

      </div>

    )
}


export default Contact