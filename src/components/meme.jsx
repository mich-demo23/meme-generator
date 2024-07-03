
// import meme from '../assets/meme.png'

import { useEffect, useState } from 'react'
import download from '../assets/download.svg'
import html2canvas  from 'html2canvas'


export default function Meme (){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage : JSON.parse(sessionStorage.getItem('meme'))  
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
        sessionStorage.setItem('meme', JSON.stringify(url))
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

    function handleSaveImage () {
        const element = document.getElementById('image')
        html2canvas(element).then(canvas => {
          const dataURL = canvas.toDataURL()
          const link = document.createElement('a')
          link.href = dataURL
          link.download = 'meme.png'
          link.click()
        })}

    return (
        <div className="meme">
            <div className='form'>
                <div className='form-text'>

                <input 
                    type='text'
                    placeholder='Top text'
                    className='form-input left'
                    name='topText'
                    value= {meme.topText}
                    onChange={handlechange}

                />

                <input
                    type='text'
                    placeholder='Bottom text'
                    className='form-input right'
                    name='bottomText'
                    value= {meme.bottomText}
                    onChange={handlechange}

                
                 />
                </div>

            </div>
            <div className='meme-image-container' id='image'>
                <img src={`${meme.randomImage}`} className="meme-image" />
                <h2 className='meme-top-text'>{meme.topText}</h2>
                <h2 className='meme-bottom-text'>{meme.bottomText}</h2>
            </div>

            <div className='save'>

            <button className='form-button' onClick={getMeme} >
                Get new meme image  🖼
                </button>
            <div className='save-image'  onClick={handleSaveImage} >
                <img src={download} alt='download-icon' className='save-image-img'/>
                <div>
                <div >Save</div>
                </div>
            </div>

            </div>
        </div>
    )
}


