import React, { useState, useEffect } from 'react';
import { Button, FormField, Label } from "./styles";
import {useParams} from 'react-router-dom';
import EditClosetItem from './EditClosetItem'; 


export default function ShowClosetItem() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState('')
    const [outfitData, setOutfitData] = useState([])
    const [outfitDetailData, setOutfitDetailData] = useState([])
    const [selectedOutfit, setSelectedOutfit] = useState("")
    const [showOutfitOptions, setShowOutfitOptions] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/closet_items")
          .then((r) => r.json())
          .then((closetData) => {setData(closetData)});
      }, []);
    
    useEffect(() => {
        fetch("http://localhost:4000/outfits")
          .then((r) => r.json())
          .then((outfitData) => {setOutfitData(outfitData)});
      }, []);

    useEffect(() => {
        fetch("http://localhost:4000/outfit_details")
          .then((r) => r.json())
          .then((outfitDetailData) => {setOutfitDetailData(outfitDetailData)});
      }, []);

    const outfitOptions = outfitData.map(({ id, nickname }) => 
    <option key={id} value={id}>{nickname}</option> )

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
        .then(() => {
            handleDeleteClosetItem(id)
            setIsDeleted(true)
        })
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

    function handleAddToOutfit(){
          setShowOutfitOptions((showOutfitOptions) => !showOutfitOptions)
      }
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const newOutfitDetail = {
            closet_item_id: id,
            outfit_id: selectedOutfit,
        }
    
        fetch(`/outfit_details`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOutfitDetail),
        })
        .then((r) => {
            setIsLoading(false);
          if (r.ok) {
            r.json().then((outfitDetail) => addNewOutfitDetail(outfitDetail));
          }})
          setShowOutfitOptions((showOutfitOptions) => !showOutfitOptions)
      }

    function addNewOutfitDetail(newOutfitDetail){
        setOutfitDetailData((prevState) => [...prevState, newOutfitDetail])
    }

    const {item_category, image, color, description, brand, date_purchased, purchase_price } = currentItem

    const dateSplit = date_purchased?.split('-')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

    // console.log(outfitDetailData)
    console.log(selectedOutfit)
    
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
            { isDeleted ? 
            (<><h1 className="deleted-message">Item Successfully Deleted!</h1><p className="deleted-message" style={{paddingTop: "0"}}>Click "My Closet" to view your existing items.</p></>) : (
        <div className="show-item-details-container">
        <div className="show-item-details-image">
            <img src={image} alt={description}/>
        </div>
        <div className="show-item-details-text">
            <p className="item-category">{item_category?.item_type}</p>
            <p className="item-description">{description}</p>
            <p className="item-brand-color">{brand} | {color}</p>
            <p className="item-date-purchased">Purchased: {dateItem}</p>
            <p className="item-purchase-price">Purchase price: ${purchase_price?.toFixed(2)}</p>
            <div className="button-div">
                { showOutfitOptions ? (null) : (
                <>
                <button className="controller-button" onClick={handleDelete}>Delete</button>
                <button className="controller-button" onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
                <button className="controller-button" onClick={handleAddToOutfit}>{showOutfitOptions ? "Go Back" : "Add to 'fit" }</button>
                </>
                )}
                </div>
                {showOutfitOptions ? 
                (<form onSubmit={handleSubmit}>
                    <br/>
                    <br/>
                    <br/>
                    <FormField>
                    <h5>Outfit Nickname</h5>
                    <br/>
                    <select id="outfit-option" onChange={(e) => setSelectedOutfit(e.target.value)}>{outfitOptions}</select>
                    </FormField>
                    <button className="controller-button" style={{padding: "10px", fontSize: "15px", margin: "0px"}}>
                        {isLoading ? "Loading..." : "Add to Outfit"}
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button className="controller-button" onClick={handleAddToOutfit}>Cancel</button>
                </form>
            ) : (null)} 
            </div>
            </div>
            )}
        </div>
        )}
    </div>
  )
}