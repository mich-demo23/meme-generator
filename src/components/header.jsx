// import Navbar from './navbar'
// import earth from '../assets/earth.png';
import react from '../assets/react.svg'
import trollface from '../assets/trollface.png'

function Header () {


    return (
        <div className='header'>

                <div className='header-left'>
            <img src={react} className='header-logo left'/>
            <p className='header-project'>TiredDev</p>

                </div>
            <div className='header-right'>

            <h3 className='header-title'>Meme Generator</h3>
            <img src={trollface} className="header-logo right" />
            </div>

        </div>
    )
}

export default Header
