import { useEffect, useState } from "react"

export default function WindowTracker () {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', watchWidth
         )

        function watchWidth () {
            setWindowWidth(window.innerWidth)

        }
        return () =>{
            removeEventListener('resize', watchWidth)
            console.log("clean")
        }

    }, [])

    return  (
        <div>
            <h1>Window width: {windowWidth}</h1>
        </div>

    )
}