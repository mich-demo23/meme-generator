
import { useState } from 'react'
import '../App.css'


function AddItem () {

    const thingsArray = ["Thing 1", "Thing 2"]
    const [thing, setThing] = useState(thingsArray)

    function addItem () {
      setThing(prevState => [...prevState, `Thing ${prevState.length + 1} `])
      console.log(thing)
    }

    const things = thing.map(thingitem => <p key={thingitem}>{thingitem}</p>)



    return (
        <div>

        <button onClick={addItem}>Add item</button>
        {things}
   
    </div>

        
  
    )
}

export default AddItem