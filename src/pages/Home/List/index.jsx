import React from "react";
import './List.css'
import ListName from "./ListName";
import ListPhoto from './ListPhoto';
import { Link } from 'react-router-dom';

function List({data}){
    
    const url = data.urls.regular.slice(28,60)
    // console.log(data)
    
    return(
        <Link to = {`/new-photo/${data.id}`} >
        <div className="users-list" >
                <ListName Fname = {data.user.username} />
                <ListPhoto photo = {data.user.profile_image.medium}/>
        </div>
        </Link>
        
    )
}
export default List