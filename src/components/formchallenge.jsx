import { useState } from "react";

export default function FormChallenge () {


    const [formData, setFormData] =  useState({
        email : "",
        password : "",
        confirmPassword : "",
        joinNewsletter : false

    })


    function handlechange (event) {
        
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
          return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value 
          }
        })

    }
    
        function handleSubmit (event) {
            event.preventDefault()
            if(formData.password === formData.confirmPassword){
                console.log("Successfully signed up")
            }
            else {
                console.log("passwords do not match")
                return
            }
            if(formData.joinNewsletter === true){
                console.log("Thanks for signing up for our newsletter")
            }
            console.log(formData)
        }

    return ( 
        <form onSubmit={handleSubmit} >
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handlechange}

            />

            <input 
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handlechange}

            required
            />
            <input 
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handlechange}

                required
            />
            <input 
                type="checkbox"
                id="joinNewsletter"
                name="joinNewsletter"
                checked={formData.joinNewsletter}
                onChange={handlechange}

            />
            <label htmlFor="joinNewsletter">I want to join the newsletter</label>

            <button>Sign up</button>

        </form>
    )
}

