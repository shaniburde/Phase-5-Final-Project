import React, { useState, useEffect } from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";


export default function OutfitForm({ user, addNewOutfit, addOutfit, setAddOutfit }) {
    const [nickname, setNickname] = useState("")
    const [category, setCategory] = useState("")
    const [categoryData, setCategoryData] = useState([])
    const [closetItems, setClosetItems] = useState([])
    const [outfitItems, setOutfitItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/closet_items")
        .then(r => r.json())
        .then(data => setClosetItems(data))
    }, [])

    useEffect(() => {
        fetch("/outfit_categories")
        .then(r => r.json())
        .then(data => setCategoryData(data))
    }, [])

    const categoryOptions = categoryData.map(({ id, outfit_type }) => 
    <option key={id} value={id}>{outfit_type}</option> 
    )

    const closetItemOptions = closetItems.map(({ id, image, description }) => 
    <div className="radio-buttons">
        <input
          id={id}
          value={id}
          name={description}
          type="radio"
          onChange={(e) => outfitItems.push(e.target.value)}
        />
        <img key={id} src={image} alt={description}/> 
    </div>
    )
    

   

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        const newOutfitObj = {
            nickname: nickname,
            outfit_category_id: category,
            user_id: user.id,
        }
              fetch("http://localhost:4000/outfits",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOutfitObj)
              })
              .then((r) => {
                setIsLoading(false);
              if (r.ok) {
                r.json().then((data) => addNewOutfit(data));
              } else {
                r.json().then((err) => setErrors(err.errors));
              }})
              setAddOutfit((addOutfit) => !addOutfit)
              setNickname("")
              setCategory("")  
      }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
    <FormField>
        <Label htmlFor="nickname">Nickname:</Label>
        <Input
          type="text"
          id="nickname"
          autoComplete="off"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="category">Category</Label>
        <select id="category"  onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions}
        </select>
      </FormField>
      <FormField>
        <Label htmlFor="closet_items">Select Items</Label>
        {closetItemOptions}
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
