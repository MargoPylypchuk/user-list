import React from "react";
import './ListPhoto.css'

function ListPhoto({photo}){
    
    return(
        <div className="users-ph">
            <img src ={photo} alt= 'ada' className="us-ph"/>
        </div>
    )
}
export default ListPhoto