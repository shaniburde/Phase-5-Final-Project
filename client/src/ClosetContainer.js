import React, { useEffect, useState } from 'react';
import ClosetItem from './ClosetItem';
import ClosetItemForm from './ClosetItemForm';
import Search from './Search';


export default function ClosetContainer({ user }) {
    const [data, setData] = useState([])
    const [addItem, setAddItem] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
        .filter((data) => { 
            return data.description.toLowerCase().includes(searchTerm.toLowerCase());
          })
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
    <div className="outfit-page-container">
        <div className="form-toggle-button-container">
            <button className="form-toggle-button" onClick={() => setAddItem((addItem) => !addItem)}>{addItem ? "View My Closet" : "Add a closet item!"}</button>
        </div>
        {addItem ? 
        (<div>
        <ClosetItemForm 
            user={user} 
            addNewClosetItem={addNewClosetItem}
            handleUpdateClosetItem={handleUpdateClosetItem}
            setAddItem={setAddItem}
            addItem={addItem}/> 
        </div>
        ) : (
        <>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="closet-container">
            {closetList}
        </div>
        </>
    )}
    </div>
  )
}
