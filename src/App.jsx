/* eslint-disable react/jsx-key */
//Airbnb

import Header from './components/header'
import Travel from './components/travel'
import Footer from './components/footer'

import traveljournal from './data/traveljournal'
import './App.css'

function App() {

    const traveldata = traveljournal.map(data => {
      return (
        <Travel 
          key = {data.id}
         {...data}
        />
      )
    })


    console.log(traveldata)

  return (
    <div>
        <Header />
        <section className='travel-container'>
        {traveldata}
        </section>
        <Footer />
        
     </div> 
  )


  }
  
  export default App
