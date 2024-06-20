/* eslint-disable react/prop-types */

import '../App.css'


function Box (props) {



    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }

    return (
        <div
         style={styles} 
         className="box"
         onClick={props.handleClick}
         ></div>
    )
}

export default Box