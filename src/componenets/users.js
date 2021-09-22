import React, { useEffect, useState } from 'react'
export default function Users(props) {
    useEffect(() => {
        console.log('UseEffect');
     });
   
    return (
        <div>
            <h1>User {props.count}</h1>
        </div>
    )
}
