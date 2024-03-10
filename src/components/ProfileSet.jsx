// eslint-disable-next-line no-unused-vars
import React from "react";

function capitalizeFirstLetter(input){
     return input.charAt(0).toUpperCase();
}

// eslint-disable-next-line react/prop-types
export default function ProfileSet({fullName}){
    // eslint-disable-next-line react/prop-types
    const initials = fullName.split(" ").slice(0,2).map(word => capitalizeFirstLetter(word)).join("");  

return(
    <div>
        <h1>{initials}</h1>
    </div>
)
}