import '../App.css'
import airbnb from '../assets/airbnb.svg'
import search from '../assets/magnifying-glass.svg'

function Navbar(){

    return (
        <>
            <nav className='nav'>
                <img src={airbnb} className='airbnb-logo'  />
                <div className="main">
                <div className="battery-top"></div>
                <div className="battery-content">
                <div className="charge"></div>
                
            </div>
            </div>
                <span className='nav-search'>
                <input placeholder='Search' type='search' className='input'/>
                    <img src={search} className='search'/>
                    </span>
                
            </nav>
        </>
    )
}

export default Navbar