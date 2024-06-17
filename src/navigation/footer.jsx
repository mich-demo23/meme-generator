import '../App.css'

import instagram from '../assets/instagram-logo-light.svg'
import github from '../assets/github-logo-light.svg'
import twitter from '../assets/twitter-logo-bold.svg'
import facebook from '../assets/facebook-logo-bold.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer (){

    return (
        <>
        <footer className='footer'>
        <span>
            <img src={facebook} className='footer-logo' />
            <img src={instagram} className='footer-logo'/>
            <img src={github} className='footer-logo' />
            <img src={twitter} className='footer-logo' />
            </span>
          <small>&copy; 2024 <FontAwesomeIcon icon='fa-apple' /> TiredDev Development. All rights reserved.</small>
          
        </footer>
        </>
    )
}

export default Footer