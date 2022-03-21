import React, { useState } from 'react';
import EditClosetItem from './EditClosetItem';

export default function ClosetItem({ closetItem, handleDeleteClosetItem, handleUpdateClosetItem }) {
    const [isEditing, setIsEditing] = useState(false);

    const {id, item_category, image, color, description, brand, date_purchased, purchase_price } = closetItem

    const dateSplit = date_purchased.split('-')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

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
    <div className="closet-container">
        {isEditing ? (
            <EditClosetItem 
                setIsEditing={setIsEditing}
                handleUpdateClosetItem={handleUpdateClosetItem}
                closetItem={closetItem}
            />

        ) : (
        <div>
            <button className="closet-item-delete" onClick={handleDelete}>X</button>
            <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
            <img src={image} alt={description} className="item-image"/>
            <p className="item-description">Description: {description}</p>
            <p className="item-color">Color: {color}</p>
            <p className="item-brand">Brand: {brand}</p>
            <p className="item-date-purchased">Date purchased: {dateItem}</p>
            <p className="item-purchase-price">Purchase price: ${purchase_price}</p>
            <p className="item-category">{item_category.item_type}</p>
        </div>
        )
    }
        
    </div>

  )
}
