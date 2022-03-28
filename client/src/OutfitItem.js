import React from 'react';
import { Link } from 'react-router-dom';


export default function OutfitItem({ outfit }) {

 
    const { id, closet_items, nickname, outfit_category } = outfit

    const outfitImages = closet_items.map((item) => 
        <div className="" style={{display: "inline-flex", flexWrap: "wrap", margin: ".5%"}}>
            <img style={{height: "30vh"}} src={item.image} key={item.id} alt="closet item belonging to a specific outfit"/> 
        </div>

    )

  return (
        <div className="col" style={{padding: "1%", margin: "1%", alignItems: "center"}}>
            <div className="card" style={{ justifyItems: "center", alignItems: "center", borderRadius: "30px", border: "none", backgroundColor: "#F1F8F9", transition: "all .3s ease-in-out" }}>
                <div className="card-body">
                    <div className="card-body">
                    <Link className="outfit-details" to={`/my_outfits/${id}`}>
                    <div className="container">
                        <div className="row-sm" style={{flexDirection: "row", display: "flex"}}>
                            {outfitImages}
                        </div>
                    </div>
                        <h3 className="card-title">{nickname}</h3>
                        <h5 className="card-text">{outfit_category?.outfit_type}</h5>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

