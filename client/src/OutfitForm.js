import React, { useState, useEffect } from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";


export default function OutfitForm({ user, addNewOutfit, addOutfit, setAddOutfit }) {
    const [nickname, setNickname] = useState("")
    const [nicknameSubmitted, setNicknameSubmitted] = useState(false)
    const [category, setCategory] = useState()
    const [categoryData, setCategoryData] = useState([])
    const [closetItems, setClosetItems] = useState([])
    const [outfitItems, setOutfitItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    console.log(category)
    
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
        <div className="item-options">
            <input
            id={id}
            value={id}
            name={description}
            type="checkbox"
            onChange={(e) => console.log(e.target.value)}
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
                r.json()
                    .then((data) => addNewOutfit(data))
                    .then(setNicknameSubmitted((nicknameSubmitted) => !nicknameSubmitted))
              } else {
                r.json().then((err) => setErrors(err.errors));
              }})
            //   setAddOutfit((addOutfit) => !addOutfit)
            //   setNickname("")  
      }


  return (
    <form className="outfit-form" onSubmit={handleSubmit}>
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
        <select id="category"  onClick={(e) => setCategory(e.target.value)}>
            {categoryOptions}
        </select>
      </FormField>
        { nicknameSubmitted ? (null) : (
        <>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
      </>
      )}

      { nicknameSubmitted ? (
          <FormField>
            <Label htmlFor="closet_items">Select Items</Label>
            <div className="item-options-container">
                {closetItemOptions}
            </div>
          </FormField>
      ) : (null)
    }
    </form>
  )
}
