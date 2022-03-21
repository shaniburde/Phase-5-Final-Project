import React, { useEffect, useState } from 'react';
import ClosetItem from './ClosetItem';
import ClosetItemForm from './ClosetItemForm';

export default function ClosetContainer({ user }) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/closet_items")
          .then((r) => r.json())
          .then((closetData) => {setData(closetData)});
      }, []);
    
      const closetList = [...data]
      .map((closetItem) => 
            <ClosetItem
              key={closetItem.id} 
              id={closetItem.id}
              closetItem={closetItem}
            />
        ) 
  return (
    <div className="closet-container">
        <ClosetItemForm user={user} />
        {closetList}
    </div>
  )
}
