
// import meme from '../assets/meme.png'

import { useEffect, useState } from 'react'

import img from '../assets/meme.png'

export default function Meme (){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage : img
    })
    const [allMeme, setAllMeme] = useState()
    
    useEffect(() => {
        console.log('effect ran')
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    
    function handlechange (event){
        setMeme(prevMeme => {
            const {name, value} = event.target

            return {
                ...prevMeme,
                [name] : value
            }
        })
    }


    return (
        <div className="meme">
            <div className='form'>
                <input 
                    type='text'
                    placeholder='Top text'
                    className='form-input'
                    name='topText'
                    value= {meme.topText}
                    onChange={handlechange}

                />

                <input
                    type='text'
                    placeholder='Bottom text'
                    className='form-input'
                    name='bottomText'
                    value= {meme.bottomText}
                    onChange={handlechange}

                
                 />

                <button 
                    className='form-button'
                    onClick={getMeme}
                    
                    >
                
                Get new meme image  🖼
                
                </button>


            </div>
            <div className='meme-image-container'>
                <img src={`${meme.randomImage}`} className="meme-image" />
                <h2 className='meme-top-text'>{meme.topText}</h2>
                <h2 className='meme-bottom-text'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}


