// import { Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";
// import { useNavigate } from "react-router-dom";

export default function ClosetItemForm({ user, addNewClosetItem, setAddItem, addItem }) {
    const [image, setImage] = useState("")
    const [color, setColor] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [datePurchased, setDatePurchased] = useState("")
    const [purchasePrice, setPurchasePrice] = useState("")
    const [category, setCategory] = useState("")
    const [categoryData, setCategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    // let navigate = useNavigate();


    useEffect(() => {
        fetch("/item_categories")
        .then(r => r.json())
        .then(data => setCategoryData(data))
    }, [])
    console.log(categoryData)

    const categoryOptions = categoryData.map(({ id, item_type}) => 
    <option key={id} value={id}>{item_type}</option> )

   

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        const newClosetItemObj = {
            image: image,
            color: color,
            description: description,
            brand: brand,
            date_purchased: datePurchased,
            purchase_price: purchasePrice,
            item_category_id: category,
            user_id: user.id,
        }
              fetch("http://localhost:4000/closet_items",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newClosetItemObj)
              })
              .then((r) => {
                setIsLoading(false);
              if (r.ok) {
                r.json().then((data) => addNewClosetItem(data));
              } else {
                r.json().then((err) => setErrors(err.errors));
              }})
              setAddItem((addItem) => !addItem)
              setImage("")
              setColor("")
              setDescription("")
              setBrand("")
              setDatePurchased("")
              setPurchasePrice("")
              setCategory("")  
      }


  return (
    <form onSubmit={handleSubmit}>
    <FormField>
        <Label htmlFor="image">Image URL</Label>
        <Input
          type="text"
          id="image"
          autoComplete="off"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="category">Category</Label>
        <select id="category"  onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions}
        </select>
      </FormField>
      <FormField>
        <Label htmlFor="color">Color</Label>
        <Input
          type="text"
          id="color"
          autoComplete="off"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          id="description"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="brand">Brand</Label>
        <Input
          type="text"
          id="brand"
          autoComplete="off"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="datePurchased">Date Purchased</Label>
        <Input
          type="date"
          id="datePurchased"
          autoComplete="off"
          value={datePurchased}
          onChange={(e) => setDatePurchased(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="purchasePrice">Purchase Price</Label>
        <Input
          type="float"
          id="purchasePrice"
          autoComplete="off"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
      </FormField>
      
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  )
}
