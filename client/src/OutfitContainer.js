import React, { useEffect, useState } from 'react';
import OutfitItem from './OutfitItem';
import OutfitForm from './OutfitForm';
// import Search from './Search';

export default function OutfitContainer({ user }) {
    const [data, setData] = useState([]);
    const [addOutfit, setAddOutfit] = useState(false);
    // const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
        fetch("http://localhost:4000/outfits")
          .then((r) => r.json())
          .then((outfitData) => {setData(outfitData)});
      }, []);

      function addNewOutfit(newOutfit){
        setData((prevState) => [...prevState, newOutfit])
    }

    console.log(data)
    const outfitList = [...data]
    .map((outfit) => 
                <OutfitItem
                  key={outfit.id} 
                  id={outfit.id}
                  outfit={outfit}
                />
            ) 


  return (
    <div className="outfit-page-container">
        <div className="form-toggle-button-container">
             <button className="form-toggle-button" onClick={() => setAddOutfit((addOutfit) => !addOutfit)}>{addOutfit ? "View My Outfits" : "Create an outfit!"}</button>
        </div>
        {addOutfit ? (
            <div>
                <OutfitForm 
                    user={user} 
                    addOutfit={addOutfit} 
                    setAddOutfit={setAddOutfit}
                    addNewOutfit={addNewOutfit}
                />
            </div>

        ) : ( 
        <>
        {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        <div className="outfit-container">{outfitList}</div> 
        </>
        )}
    </div>
  )
}
