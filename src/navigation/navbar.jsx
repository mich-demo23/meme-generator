import reactlogo from '../assets/react.svg'
import '../App.css'

function Navbar(){

    return (
        <>
            <nav className='nav'>
            <img src={reactlogo} className='nav-img' alt='reactlogo' />
            <h3> ReactFacts</h3>
            <h4>React Course - Project 1</h4>
            </nav>
        </>
    )
}

export default Navbar