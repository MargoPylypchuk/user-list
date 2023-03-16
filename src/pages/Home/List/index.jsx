import React from "react";
import './List.css'
import ListName from "./ListName";
import ListPhoto from './ListPhoto';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function List({data}){
    // const navigate = useNavigate();
    
    console.log(data)
    return(
        <Link to = {'/new-photo'}>
        <div className="users-list" >
                <ListName Fname = {data.user.username} />
                <ListPhoto photo = {data.user.profile_image.medium}/>
        </div>
        </Link>
        
    )
}
export default List