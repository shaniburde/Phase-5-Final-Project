import React, { useEffect, useState } from 'react';
import OutfitItem from './OutfitItem';

export default function OutfitContainer({ user }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/outfits")
          .then((r) => r.json())
          .then((outfitData) => {setData(outfitData)});
      }, []);

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
    <div>{outfitList}</div>
  )
}
