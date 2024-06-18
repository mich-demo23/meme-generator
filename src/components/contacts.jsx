/* eslint-disable react/prop-types */


// import img1 from './assets/group77.svg'
import phoneicon from './assets/phone-fill.svg'
import mailicon from './assets/envelope-simple-fill.svg'

import './App.css'

function Contact ({image, name, phone, mail}){

    // console.log(props.image) 

 
    return (

       

        <div className='contact-card'>

          <img src ={image}  />
          <h3>{name}</h3>
          <div className='info-group'>
            <img src={phoneicon} />
            <p>{phone}</p>
          </div>
          <div className='info-group'>
            <img src={mailicon}/>
            <p>{ mail}</p>
          </div>

        </div>
        

        


    )


}

export default Contact