import React, { useState } from 'react';
import List from './List';
function App(){

const[data,updatedata]=useState();
const[arraydata,arrayupdatedata]=useState([]);

const getvalue=(event)=>{
    updatedata(event.target.value);
}
const createarray=()=>{
    arrayupdatedata((preval)=>{
   return [...preval,data]
    })
    updatedata('');

}


const deletelist=(key)=>{
    arrayupdatedata((preval)=>{
      return  preval.filter((val,id)=>{
        return key!==id;

      })
    })
}


return(
    <>
    <div className='maindiv'>
    <div className='middiv'>

    <br/>
    <h1>To-Do-List</h1>
    <br/>
    <input type="text" placeholder="Item Name" className='intext' onChange={getvalue} value={data}/>
    <button className='button' onClick={createarray}>+</button>
    
    <ul>
    
        {
            
            arraydata.map((val,id)=>{
                return <List  value={val} id={id} key={id} deleteitem={deletelist}/>
            })
        }

    </ul>

    </div>

    </div>


    </>
)

}
export default App