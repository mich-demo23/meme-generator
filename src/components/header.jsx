// import Navbar from './navbar'
import earth from '../assets/earth.png';

function Header () {


    return (
        <div className='header'>
            <span ><img src={earth} className="header-icon"/></span><span>my travel journal</span>
            
        </div>
    )
}

export default Header