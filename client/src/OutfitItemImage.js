import React from 'react'

export default function OutfitItemImage({ image }) {
    console.log(image)
    
  return (
    <div>
       <img src={image} alt="closet item belonging to a specific outfit"/> 
    </div>
  )
}
