import React, { useState, useEffect } from 'react';
import { Error, Input, FormField, Label } from "./styles";



export default function EditOutfit({ setIsEditing, handleUpdateOutfit, outfit }) {
    const {id, nickname, outfit_category, outfit_details} = outfit
    const currentOutfitDetail = (outfit_details.map(({id}) => id ))
    const [outfitItemData, setOutfitItemData] = useState(currentOutfitDetail)
    const [updatedNickname, setUpdatedNickname] = useState(nickname)
    const [updatedCategory, setUpdatedCategory] = useState(outfit_category["id"])
    const [categoryData, setCategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    
    console.log(outfit_category["id"])
    console.log(updatedCategory)
   

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
            console.log(outfitDetailId)
            handleDeleteOutfitDetail(outfitDetailId)
            window.location.reload()
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
          setOutfitItemData(updatedOutfitDetails);
    }

    const outfit_items = outfit_details.map(({id, closet_item}) => 
    <>
    <div className="closet-item" key={id}>
        <button className="controller-button-edit-outfit" onClick={() => handleDelete(id)}>Remove from this Outfit</button>
        <img src={closet_item.image} alt={closet_item.description} className="item-image" style={{hover: "hidden"}}/>
    </div>
    </>
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
          setIsEditing(false);
          setIsLoading(false);
          window.location.reload();
          if (r.ok) {
            r.json().then((updatedOutfit) => handleUpdateOutfit(updatedOutfit))
            } else {
              r.json().then((err) => setErrors(err.errors));
            }})
      }


  return (                                                 
    <form className="edit-outfit-form" onSubmit={handleSubmit}>
        <FormField>
        <h2 className="form-title">Edit outfit</h2>
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
            <select id="category" value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)}>
                {categoryOptions}
            </select>
        </FormField>
            <button className="controller-button-edit-outfit" style={{padding: "2%"}} variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Save"}
            </button>
        <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
        </FormField>
        <FormField>
          <Label htmlFor="category">Items</Label>
          <div className="outfit-items-container" style={{paddingBottom: "8%"}} >{outfit_items}</div>
        </FormField>
        </form>
  )
}
