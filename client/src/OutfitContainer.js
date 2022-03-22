import React, { useEffect, useState } from 'react';
import OutfitItem from './OutfitItem';
import OutfitForm from './OutfitForm'

export default function OutfitContainer({ user }) {
    const [data, setData] = useState([]);
    const [addOutfit, setAddOutfit] = useState(false)

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
    <div>
        <button onClick={() => setAddOutfit((addOutfit) => !addOutfit)}>{addOutfit ? "View My Outfits" : "Create an outfit!"}</button>
        {addOutfit ? (
            <div>
                <OutfitForm 
                    user={user} 
                    addOutfit={addOutfit} 
                    setAddOutfit={setAddOutfit}
                    addNewOutfit={addNewOutfit}
                />
            </div>

        ) : ( <div>{outfitList}</div> )}
        
    </div>
  )
}
