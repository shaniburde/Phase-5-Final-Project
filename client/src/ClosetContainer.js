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
        
        function addNewClosetItem(newClosetItem){
            setData((prevState) => [...prevState, newClosetItem])
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
        
        const closetList = [...data]
          .map((closetItem) => 
                <ClosetItem
                  key={closetItem.id} 
                  id={closetItem.id}
                  closetItem={closetItem}
                  handleDeleteClosetItem={handleDeleteClosetItem}
                  handleUpdateClosetItem={handleUpdateClosetItem}
                />
            ) 
  return (
    <div className="closet-container">
        <ClosetItemForm 
            user={user} 
            addNewClosetItem={addNewClosetItem}
            handleUpdateClosetItem={handleUpdateClosetItem}
        />
        {closetList}
    </div>
  )
}
