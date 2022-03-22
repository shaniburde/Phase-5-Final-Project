import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function ShowClosetItem() {
    
    const [currentItem, setCurrentItem] = useState('')
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`/closet_items/${id}`)
        .then((r) => r.json())
        .then((item) => {
            setCurrentItem(item)
        });
    }, [id]);

    
    const {item_category, image, color, description, brand, date_purchased, purchase_price } = currentItem

    const dateSplit = date_purchased?.split('-')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

    console.log(currentItem)
    
  return (
    <div className="closet-item-details">
        <img src={image} alt={description} className="item-image" />
        <p className="item-description">Description: {description}</p>
        <p className="item-color">Color: {color}</p>
        <p className="item-brand">Brand: {brand}</p>
        <p className="item-date-purchased">Date purchased: {dateItem}</p>
        <p className="item-purchase-price">Purchase price: ${purchase_price?.toFixed(2)}</p>
        <p className="item-category">{item_category?.item_type}</p>
    </div>
  )
}
