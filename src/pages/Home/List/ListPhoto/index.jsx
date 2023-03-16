import React from "react";
import './ListPhoto.css'

function ListPhoto({photo}){
    
    return(
        <div className="users-ph">
            <img src ={photo} href ='ph' className="us-ph"/>
        </div>
    )
}
export default ListPhoto