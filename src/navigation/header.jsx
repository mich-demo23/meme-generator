// import Navbar from './navbar'
import photo from "../assets/photo.png"
import mail from '../assets/envelope.svg'
import linkedin from '../assets/linkedin-logo-light.svg'

function Header () {


    return (
        <>
            {/* <Navbar /> */}
            <div className="header">
                <img src={photo} className="photo" />
                <p className="name">Michael Amao</p>
                <div id="spinner"></div>
                <p className="role">Backend Developer</p>
                <span className="links">
                
                <button className="emailbtn" > <img src={mail} className="email-icon"/> Email </button>

                <button className="linkedinbtn"> <img src={linkedin} className="linkedin-icon"/> LinkedIn </button>
          
                
                
                </span>
                
            </div>
        </>
    )
}

export default Header