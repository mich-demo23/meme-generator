/* eslint-disable react/prop-types */

import boxesdata from '../data/boxesdata'
import Box from './box'
import { useState } from 'react'
import '../App.css'

function Boxes () {


    const [box, setBox]  = useState(boxesdata)

    function toggleBox (id) {

        setBox(prevBox => {
            return prevBox.map((box) => {
                return  box.id === id ? { ...box, on: !box.on } : box
            })
        })

    }


    const boxShow = box.map(box => (
    <Box 
         
        key={box.id}
        id={box.id}
        on={box.on}
        handleClick={() => toggleBox(box.id)}

     />
     ) )


    return (

        <div className='boxes'>
                {boxShow}
        </div>
    )
}

export default Boxes