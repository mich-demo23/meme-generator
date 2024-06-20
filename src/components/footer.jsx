import '../App.css'

import instagram from '../assets/instagram-logo-light.svg'
import github from '../assets/github-logo-light.svg'
import twitter from '../assets/twitter-logo-bold.svg'
import facebook from '../assets/facebook-logo-bold.svg'
import react from '../assets/react.svg'
import vite from '../assets/vite.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer (){

    return (
        <>
        <footer className='footer'>
            
            <img src={react} className='footer-react'/>
            <div className='footer-main'>
            <span>
            
            <a href='' target='_blank'>
            <img src={facebook} className='footer-logo' />
            </a>
            <a href='' target='_blank'>
            <img src={instagram} className='footer-logo'/>
            </a>
            <a href='https://github.com/mich-demo23' target='_blank'>
            <img src={github} className='footer-logo' />
            </a>
            <a href='' target='_blank'>
            <img src={twitter} className='footer-logo' /> 
            </a>
            </span>
          <small>&copy; 2024 <FontAwesomeIcon icon='fa-apple' /> TiredDev Development. All rights reserved.</small>
          </div>
          <img src={vite} className='footer-vite' />
        </footer>
        </>
    )
}

export default Footer