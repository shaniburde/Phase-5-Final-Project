import React from 'react';
import { Link } from 'react-router-dom';


export default function OutfitItem({ outfit }) {
 
    const { id, closet_items, nickname, outfit_category } = outfit

    const outfitImages = closet_items.map((item) => 
        <img className="outfit-items" src={item.image} key={item.id} alt="closet item belonging to a specific outfit"/> 
    )

  return (
    <div className="outfit-container">
        <Link className="outfit-details" to={`/my_outfits/${id}`}>
            <div className="outfit-items-container">{outfitImages}</div>
            <h3 className="outfit-nickname">{nickname}</h3>
            <h5 className="outfit-category">{outfit_category?.outfit_type}</h5>
        </Link>
    </div>
  )
}
