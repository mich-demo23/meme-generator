/* eslint-disable react/prop-types */

import { useState } from "react"



function Joke (props){

    const [isShown, setIsShown] = useState(false)


    function toggle(){
        setIsShown(prevState => !prevState)
        
    }


    return (
        <>

            <div className="jokes">

            {/* {props.setup && props.punchline} */}
                { props.setup &&<p className="setup">Setup: {props.setup}</p>}
                 {isShown && <p style={{display:props.punchline? "block" : "none" }} className="punchline">Punchline: {props.punchline}</p>}
             
             {props.punchline && 
                 <button onClick={toggle}  >
                 {isShown===true? "Hide" : "Show"} punchline</button>



             }
            </div>

             
        </>
    )

}

export default Joke