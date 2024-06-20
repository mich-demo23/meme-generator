/* eslint-disable react/prop-types */

import { useState } from 'react'
import '../App.css'

function Counter() {

    const [count, setCount] = useState(0)




    function add () {
        setCount(prevCount => prevCount + 1)
        }
        function subtract () {
          setCount(prevCount => prevCount - 1)
          }

    function Count (props){
        return (
          <div className='counter'>
              <h1>{props.number}</h1>
        </div>
        )
      }


    return (
        <div className='count'>
        <button 
        onClick={subtract}
        className='minus'>-</button>
        <Count 
            number={count}
        />
        <button 
        onClick={add}
        className='plus'>+</button>
      </div>
    )
}

export default Counter