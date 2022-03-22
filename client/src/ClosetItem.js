import React, { useState } from 'react';
import EditClosetItem from './EditClosetItem';
import { Link } from "react-router-dom"; 

export default function ClosetItem({ closetItem, handleDeleteClosetItem, handleUpdateClosetItem }) {
    const [isEditing, setIsEditing] = useState(false);

    const {id, image, description } = closetItem

    function handleDelete(){
        fetch(`/closet_item/${id}`, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        handleDeleteClosetItem(id)
      }

  return (
    <div className="closet-item">
            <Link className="closet-item-details" to={`/closet_items/${id}`}>
                <img src={image} alt={description} className="item-image" />
            </Link>
    </div>

  )
}
