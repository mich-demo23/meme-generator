import Header from './navigation/header'
import Footer from './navigation/footer'

import './App.css'

function App() {

  return (
    <>
        <div className='container'>
          <Header />
        <div className="content" >
        <h1>Fun facts about React</h1>
        <ul className='content-list'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
          <Footer />
        </div>
    </>
  )


}

export default App