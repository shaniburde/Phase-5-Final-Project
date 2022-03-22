import React, { useState, useEffect } from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";



export default function EditClosetItem({ setIsEditing, handleUpdateClosetItem, closetItem }) {
    const {id, item_category, image, color, description, brand, date_purchased, purchase_price } = closetItem
    const [updatedImage, setUpdatedImage] = useState(image)
    const [updatedColor, setUpdatedColor] = useState(color)
    const [updatedDescription, setUpdatedDescription] = useState(description)
    const [updatedBrand, setUpdatedBrand] = useState(brand)
    const [updatedDatePurchased, setUpdatedDatePurchased] = useState(date_purchased)
    const [updatedPurchasePrice, setUpdatedPurchasePrice] = useState(purchase_price)
    const [categoryData, setCategoryData] = useState([])
    const [updatedCategory, setUpdatedCategory] = useState(item_category)
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/item_categories")
        .then(r => r.json())
        .then(data => setCategoryData(data))
    }, [])
    

    const categoryOptions = categoryData.map(({ id, item_type}) => 
    <option key={id} value={id}>{item_type}</option> )

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`/closet_items/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: updatedImage,
            color: updatedColor,
            description: updatedDescription,
            brand: updatedBrand,
            date_purchased: updatedDatePurchased,
            purchase_price: updatedPurchasePrice,
            item_category_id: updatedCategory
          }),
        })
        .then((r) => {
            setIsLoading(false);
            setIsEditing(false);
          if (r.ok) {
            r.json().then((updatedClosetItem) => handleUpdateClosetItem(updatedClosetItem));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }})
      }


  return (                                                 
    <form className="edit-closet-item-form" onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="image">Image URL</Label>
            <Input
            type="text"
            id="image"
            autoComplete="off"
            placeholder={image}
            value={image}
            onChange={(e) => setUpdatedImage(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="category">Category</Label>
            <select id="category"  onChange={(e) => setUpdatedCategory(e.target.value)}>
                {categoryOptions}
            </select>
        </FormField>
        <FormField>
            <Label htmlFor="color">Color</Label>
            <Input
            type="text"
            id="color"
            autoComplete="off"
            placeholder={color}
            value={updatedColor}
            onChange={(e) => setUpdatedColor(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="description">Description</Label>
            <Input
            type="text"
            id="description"
            autoComplete="off"
            placeholder={description}
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="brand">Brand</Label>
            <Input
            type="text"
            id="brand"
            autoComplete="off"
            placeholder={brand}
            value={updatedBrand}
            onChange={(e) => setUpdatedBrand(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="datePurchased">Date Purchased</Label>
            <Input
            type="date"
            id="datePurchased"
            autoComplete="off"
            placeholder={date_purchased}
            value={updatedDatePurchased}
            onChange={(e) => setUpdatedDatePurchased(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="purchasePrice">Purchase Price</Label>
            <Input
            type="float"
            id="purchasePrice"
            autoComplete="off"
            placeholder={purchase_price}
            value={updatedPurchasePrice}
            onChange={(e) => setUpdatedPurchasePrice(e.target.value)}
            />
        </FormField>
        
            <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Save"}
            </Button>
        
        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </form>
  )
}
