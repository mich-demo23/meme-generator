/* eslint-disable react/prop-types */
import star from '../assets/star-fill.svg'

function Card(props){
        let badgeText
        if(props.openspots === 0){
            badgeText = "sold out"
        } else if (props.location === "online"){
            badgeText = "online"
        } else {
            badgeText = ''
        }


    return(

        <div className='card-container'>
        <div className='card'>
        
         {badgeText && <p className='card-status'>
         {badgeText.toUpperCase()}</p> }

                <img src={props.img} className='card-photo' />
                <div className='card-info'>
                <img src={star} className='card-star' />
                <span> {props.rating} </span>
                <span className='gray'>({props.reviewCount}) . </span>
                <span className='gray'>{props.country}</span>
                <p className='card-title'>{props.title}</p>
                <p >
                <span className='bold card-price'>From ${props.price} /</span> 
                per person</p>
                </div>

        </div>
        </div>
    )
}

export default Card

// const nums = [1,2,3,4,5]

// const squared = nums.map(function(item) {
//     return item * item
// })

//     console.log(squared)


// const names = ['alice', 'bob', 'charlie', 'danielle']

// const capitalize = names.map((name) =>  {
    
//     return name[0].toUpperCase() + name.slice(1)

// })

// console.log(capitalize)

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// const tagged = pokemon.map((name) => {

//     return `<p>${name}</p>}`
// })