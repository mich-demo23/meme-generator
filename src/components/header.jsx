// import Navbar from './navbar'
// import earth from '../assets/earth.png';
import trollface from '../assets/trollface.png'

function Header () {


    return (
        <div className='header'>
            <img src={trollface} className="header-logo" />
            <h3 className='header-title'>Meme Generator</h3>
            <p className='header-project'>React Course - Project 3</p>

        </div>
    )
}

export default Header
