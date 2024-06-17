//Digital Business card

import Header from './navigation/header'
import Footer from './navigation/footer'

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {

  return (
    <>
        
        <Header />
        <div className='mainbody'>
          <h4 className='mainbody-title'> About </h4>
          <p className='mainbody-content'> 
              I&apos;m Michael Amao. A 300 level software engineering student at Babcock University. I started off with frontend development, though I&apos;m not much of a creative. I started with learning React JS, struggled with styling a bit, but I was able to cope. Eventually, I left frontend after styling gave me a lot of headache while working on a school project. I then took a look at backend development, watched some youtube videos and decided to learn PHP. 
          
          </p>
          <h4 className='mainbody-title'>Interests </h4>
          <p className='mainbody-content' >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat asperiores voluptate voluptates excepturi sequi aut voluptatibus recusandae, explicabo nulla porro veritatis quas nihil earum eaque aperiam delectus sint debitis deleniti!
          </p>
          <details>
            <summary className='mainbody-title'>Read more</summary>
            <p className='mainbody-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat asperiores voluptate voluptates excepturi sequi aut voluptatibus recusandae, explicabo nulla porro veritatis quas nihil earum eaque aperiam delectus sint debitis deleniti!</p>
          </details>
          <ul className='list'>
          <b className='list-title'>Stack</b>
                    <li>HTML</li>
                    <li>CSS <FontAwesomeIcon icon="" /> </li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>PHP</li>
                    
                </ul>
        <Footer />
        </div>
     </> 
  )


}

export default App