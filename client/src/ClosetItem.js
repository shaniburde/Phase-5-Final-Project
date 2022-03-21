import React from 'react'

export default function ClosetItem({ closetItem }) {

const {item_category, image, color, description, brand, date_purchased, purchase_price } = closetItem

  return (
    <div className="closet_item">
        {/* <button onClick={handleDelete}>X</button> */}
        <img src={image} className="item-image"/>
        <p className="item-description">{description}</p>
        <p className="item-color">{color}</p>
        <p className="item-brand">{brand}</p>
        <p className="item-date-purchased">{date_purchased}</p>
        <p className="item-purchase-price">${purchase_price}</p>
        <p className="item-category">{item_category.item_type}</p>
    </div>

  )
}
