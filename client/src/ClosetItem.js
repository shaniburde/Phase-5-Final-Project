import React from 'react';
import { Link } from "react-router-dom"; 

export default function ClosetItem({ closetItem }) {
    const {id, image, description } = closetItem

  return (
    <div className="closet-item">
            <Link className="closet-item-details" to={`/closet_items/${id}`}>
                <img src={image} alt={description} className="item-image" />
            </Link>
    </div>

  )
}
