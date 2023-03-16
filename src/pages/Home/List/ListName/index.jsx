import React from "react";
import './ListName.css'

function ListName({Fname,Sname}){
    // console.log(Fname,Sname)
    return(
        <div className="users-name">
            <div className="f-name">
                {Fname}
            </div>
           
            {/* <div className="s-name">
                {Sname}
            </div> */}
        </div>
    )
}
export default ListName