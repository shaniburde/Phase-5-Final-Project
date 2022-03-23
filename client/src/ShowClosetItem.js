import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import EditClosetItem from './EditClosetItem'; 

export default function ShowClosetItem() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState('')
    const {id} = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/closet_items")
          .then((r) => r.json())
          .then((closetData) => {setData(closetData)});
      }, []);
    
    useEffect(() => {
        fetch(`/closet_items/${id}`)
        .then((r) => r.json())
        .then((item) => {
            setCurrentItem(item)
        });
    }, [id]);

    function handleDelete(){
        fetch(`/closet_items/${id}`, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        handleDeleteClosetItem(id)
      }
    function handleDeleteClosetItem(closetItemId){
        const updatedClosetItems = data.filter((item) => {
            if (item.id !== closetItemId) {
                return item
              } else {
                  return null
              }
          });
          setData(updatedClosetItems);
      }
      
    function handleUpdateClosetItem(updatedClosetItemObj) {
          const editedClosetItems = data.map((item) => {
              if (item.id === updatedClosetItemObj.id) {
                  return updatedClosetItemObj;
              } else {
                  return item;
              }
          });
          setData(editedClosetItems);
      }

    const {item_category, image, color, description, brand, date_purchased, purchase_price } = currentItem

    const dateSplit = date_purchased?.split('-')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

    console.log(currentItem)
    
  return (
      
    <div className="closet-item-details">
        {isEditing ? (
            <EditClosetItem 
                setIsEditing={setIsEditing}
                handleUpdateClosetItem={handleUpdateClosetItem}
                closetItem={currentItem}
            />
        ) : (
        <div>
            <button className="closet-item-delete" onClick={handleDelete}>Donate to goodwill</button>
            <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
            <img src={image} alt={description} className="show-item-image" />
            <p className="item-description">Description: {description}</p>
            <p className="item-color">Color: {color}</p>
            <p className="item-brand">Brand: {brand}</p>
            <p className="item-date-purchased">Date purchased: {dateItem}</p>
            <p className="item-purchase-price">Purchase price: ${purchase_price?.toFixed(2)}</p>
            <p className="item-category">{item_category?.item_type}</p>
        </div>
        )}
    </div>
  )
}