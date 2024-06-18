/* eslint-disable react/jsx-key */
//Airbnb

import Header from './components/header'
import Hero from './components/hero'
import cardsdata from './data/cardsdata'
import Card from './components/card'
import Footer from './components/footer'

import './App.css'

function App() {

      const cardElements = cardsdata.map(data => {
        return <Card 
                      key = {data.id}
                      {...data}

        />
      })
  

  return (
    <div>
        <Header />
        <Hero />
        <div className='card-container-parent'>
        {cardElements}
          </div>
        <Footer />
        
     </div> 
  )


  }
  
  export default App
