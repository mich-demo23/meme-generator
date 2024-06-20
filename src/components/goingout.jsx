

import { useState } from 'react'
import '../App.css'


function GoingOut () {

    const [isGoingOut, setIsGoingOut] = useState(true)
        
    function handleClick () {
      setIsGoingOut(prevState => !prevState )
      }


    return (
        <div className='state' >
        <h1>Do I feel like going out tonight?</h1>
        <div
        onClick={handleClick}
         className='state-value' >
          <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
        </div>
    )
}

export default GoingOut