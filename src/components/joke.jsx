/* eslint-disable react/prop-types */



function Joke (props){


    return (
        <>

            <div className="jokes">

            {/* {props.setup && props.punchline} */}
                { props.setup &&<p className="setup">Setup: {props.setup}</p>}
                 <p style={{display:props.punchline? "block" : "none" }} className="punchline">Punchline: {props.punchline}</p>
            </div>

        </>
    )

}

export default Joke