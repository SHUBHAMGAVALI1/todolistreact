import React, { useState } from 'react';

const List=(props)=>{
    return(
        <>
            <div className='listall'>
                <i className="fa-solid fa-trash" onClick={()=>{
                    props.deleteitem(props.id);
                }}  ></i>
                <li> {props.value}</li>
             </div>
        </>
    )

} 
export default List;