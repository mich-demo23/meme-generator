// import Navbar from './navbar'
// import earth from '../assets/earth.png';
import react from '../assets/react.svg'
import trollface from '../assets/trollface.png'

function Header () {


    return (
        <div className='header'>

                <div>
            <img src={react} className='header-logo'/>
            <p className='header-project'>TiredDev</p>

                </div>
            <div>

            <h3 className='header-title'>Meme Generator</h3>
            <img src={trollface} className="header-logo" />
            </div>

        </div>
    )
}

export default Header
