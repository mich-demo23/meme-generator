import { useState } from "react";

export default function Form () {

    const [name, setName] = useState({
            firstName : "",
            lastName : "",
            email : "",
            comments : "",
            isFriendly : false,
            employment : "",
            favColor : ""
    })

    // console.log(name)
    
    function handlechange (event){
        
        const {name, value, type, checked} = event.target
        
        setName(prevData => {
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
                

            }
        })
        
    }

    function handleSubmit (event) {
        event.preventDefault()
        console.log(name)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="First Name"
            onChange={handlechange}
            name="firstName"
            value={name.firstName}

            />  
            <input 
            type="text"
            placeholder="Last Name"
            onChange={handlechange}
            name="lastName"
            value={name.lastName}
            />
            <input 
            type="email"
            placeholder="email"
            onChange={handlechange}
            name="email"
            value={name.email}


            />
                <textarea 
                placeholder="comments"
                onChange={handlechange}
                name="comments"
                value={name.comments}

                />

                <input 
                type="checkbox"
                checked = {name.isFriendly}
                name="isFriendly"
                id="isFriendly"
                onChange={handlechange}

                />
                <label htmlFor="isFriendly">Are you friendly</label>


                <fieldset>
                    <legend>Current employment status</legend>
                
                <input 
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked = {name.employment === "unemployed"}

                onChange={handlechange}


                />
                <label htmlFor="unemployed" >Unemployed</label>

            <input 
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked = {name.employment === "part-time"}

                onChange={handlechange}




                />
                <label htmlFor="part-time" >Part-time</label>

                <input 
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked = {name.employment === "full-time"}

                onChange={handlechange}



                />
                <label htmlFor="full-time" >Full-time</label>

                </fieldset>


                <select
                    id="favColor"
                    value={name.favColor}
                    onChange={handlechange}
                    name="favColor"
                >
                        <option value="" >--Select--</option>
                        <option value="red" >Red</option>
                        <option value="orange" >Orange</option>
                        <option value="yellow" >Yellow</option>
                        <option value="green" >Green</option>
                        <option value="blue" >Blue</option>
                        <option value="indigo" >Indigo</option>
                        <option value="violet" >Violet</option>


                </select>

                <button>Submit</button>

        </form>
    )
}


