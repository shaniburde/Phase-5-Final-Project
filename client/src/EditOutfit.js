import React, { useState, useEffect } from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";



export default function EditOutfit({ setIsEditing, handleUpdateOutfit, outfit }) {
    const [outfitData, setOutfitData] = useState(outfit)
    const {id, nickname, outfit_category, outfit_details} = outfitData
    const [updatedNickname, setUpdatedNickname] = useState(nickname)
    const [updatedCategory, setUpdatedCategory] = useState(outfit_category.id)
    const [updatedOutfitDetails, setUpdatedOutfitDetails] = useState(outfit_details.closet_items)
    const [categoryData, setCategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false)
    

    useEffect(() => {
        fetch("/outfit_categories")
        .then(r => r.json())
        .then(data => setCategoryData(data))
    }, [])

    function handleDelete(outfitDetailId){
        fetch(`/outfit_details/${outfitDetailId}`, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
            console.log(id)
            handleDeleteOutfitDetail(outfitDetailId)
            // setIsDeleted(true)
        })
    }
    function handleDeleteOutfitDetail(outfitDetailId){
        const updatedOutfitDetails = outfit_details.filter((outfitDetail) => {
            if (outfitDetail.id !== outfitDetailId) {
                return outfitDetail
              } else {
                  return null
              }
          });
          setOutfitData(updatedOutfitDetails);
    }

    const outfit_items = outfit_details.map(({id, closet_item}) => 
    <FormField key={id}>
        <Button className="closet-item-delete" onClick={() => handleDelete(id)}>Delete</Button>
        <img src={closet_item.image} alt={closet_item.description} className="item-image"/>
    </FormField>
    )


    const categoryOptions = categoryData.map(({ id, outfit_type }) => 
    <option key={id} value={id}>{outfit_type}</option> )

    function handleSubmit(e) {
        e.preventDefault();
        const editedOutfit = {
            nickname: updatedNickname,
            outfit_category_id: updatedCategory
        }
        fetch(`/outfits/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedOutfit),
        })
        .then((r) => {
            setIsLoading(false);
            setIsEditing(false);
          if (r.ok) {
            r.json().then((updatedOutfit) => handleUpdateOutfit(updatedOutfit))
          } else {
            r.json().then((err) => setErrors(err.errors));
          }})
          window.location.reload()
      }


  return (                                                 
    <form className="edit-closet-item-form" onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="nickname">Nickname</Label>
            <Input
            type="text"
            id="nickname"
            autoComplete="off"
            placeholder={nickname}
            value={updatedNickname}
            onChange={(e) => setUpdatedNickname(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="category">Category</Label>
            <select id="category"  onChange={(e) => setUpdatedCategory(e.target.value)}>
                {categoryOptions}
            </select>
        </FormField>
        {outfit_items}
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
