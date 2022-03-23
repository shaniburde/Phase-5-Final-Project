import React from 'react';
import { Link } from 'react-router-dom';


export default function OutfitItem({ outfit }) {
 
    const { id, closet_items, nickname, outfit_category } = outfit

    const outfitImages = closet_items.map((item) => 
        <Link className="closet-item-details" to={`/closet_items/${item.id}`}>  <img className="outfit-items" src={item.image} key={item.id} alt="closet item belonging to a specific outfit"/> 
        </Link>
    )

  return (
    <div>
        <Link className="outfit-details" to={`/my_outfits/${id}`}>
            <div className="outfit-items-container">{outfitImages}</div>
            <h3>{nickname}</h3>
            <h3>{outfit_category?.outfit_type}</h3>
        </Link>
    </div>
  )
}
