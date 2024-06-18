import photogrid from '../assets/group77.svg'

function Hero() {

    return (
        <section className='hero'>
            <img src={photogrid} className='hero-photogrid'/>
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            <hr />
        </section>
    )
}

export default Hero;