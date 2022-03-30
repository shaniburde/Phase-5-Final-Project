import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditOutfit from './EditOutfit'; 

export default function ShowOutfit() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)
    const [currentOutfit, setCurrentOutfit] = useState('')
    const {id} = useParams();

    useEffect(() => {
        fetch("http://localhost:4000/outfits")
          .then((r) => r.json())
          .then((outfitData) => {setData(outfitData)});
      }, []);
    
    useEffect(() => {
        fetch(`/outfits/${id}`)
        .then((r) => r.json())
        .then((outfit) => {
            setCurrentOutfit(outfit)
        });
    }, [id]);

    function handleDelete(){
        fetch(`/outfits/${id}`, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        handleDeleteOutfit(id)
        setIsDeleted((isDeleted) => !isDeleted)
      }

    function handleDeleteOutfit(outfitId){
        const updatedOutfits = data.filter((outfit) => {
            if (outfit.id !== outfitId) {
                return outfit
              } else {
                  return null
              }
          });
          setData(updatedOutfits);
      }
      
    function handleUpdateOutfit(updatedOutfitObj) {
          const editedOutfits = data.map((outfit) => {
              if (outfit.id === updatedOutfitObj.id) {
                  return updatedOutfitObj;
              } else {
                  return outfit;
              }
          });
          setData(editedOutfits);
      }

      const {nickname, closet_items, outfit_category} = currentOutfit

      const outfitImages = closet_items?.map((item) => 
          <Link key={item.id}  to={`/closet_items/${item.id}`}>  
          <img className="outfit-items" src={item.image} alt="closet item belonging to a specific outfit"/> 
          </Link>
      )
    
  return (
      
    <div className="outfit-details-background">
        {isEditing ? (
            <EditOutfit 
                setIsEditing={setIsEditing}
                handleUpdateOutfit={handleUpdateOutfit}
                outfit={currentOutfit}
            />
        ) : ( 
        <div>
        { isDeleted ? (<><h1 className="deleted-message">Outfit Successfully Deleted!</h1><p className="deleted-message" style={{paddingTop: "0"}}>Click "My Outfits" to view your iconic looks.</p></>
        ) : (
        <div>
                <h3 className="outfit-nickname">{nickname}</h3>
                <h3 className="outfit-category">{outfit_category?.outfit_type}</h3>
                <div className="outfit-items-container">{outfitImages}</div>
            <div className="outfit-button-div">
                <button className="controller-button" onClick={handleDelete}>Delete 'Fit</button>
                <button className="controller-button" onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
            </div>
        </div>
        )}
        </div>
        )}
    </div>
  )
}