import reactlogo from './assets/react.svg'
import './App.css'

function Navbar(){

    return (
        <>
            <nav className='nav'>
                <img src={reactlogo} className='nav-img' alt='reactlogo' />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar