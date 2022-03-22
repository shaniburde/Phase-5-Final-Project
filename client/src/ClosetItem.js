import React, { useState } from 'react';
import EditClosetItem from './EditClosetItem';
import ShowClosetItem from './ShowClosetItem';
import { Link , Route, Routes } from "react-router-dom"; 

export default function ClosetItem({ closetItem, handleDeleteClosetItem, handleUpdateClosetItem }) {
    const [isEditing, setIsEditing] = useState(false);

    const {id, item_category, image, color, description, brand, date_purchased, purchase_price } = closetItem

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
        {isEditing ? (
            <EditClosetItem 
                setIsEditing={setIsEditing}
                handleUpdateClosetItem={handleUpdateClosetItem}
                closetItem={closetItem}
            />
        ) : (
        <div className="closet-container">
            <button className="closet-item-delete" onClick={handleDelete}>X</button>
            <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
            <Link className="closet-item-details" to={`/closet_items/${id}`}>
                <img src={image} alt={description} className="item-image" />
            </Link>
            <Routes>
                <Route exact path="/closet_items/:id" element={
                    <ShowClosetItem />}/>
            </Routes>
        </div>
        )
    }

    </div>

  )
}
