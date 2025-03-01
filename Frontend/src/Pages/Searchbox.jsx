import React, { useState } from 'react'

const Searchbox = ({setSearch,setSearch1}) => {
    
  return (
    <div>
      <input type="text" className='inputbox mt-3' placeholder='Search something'
     
      onChange={(e) =>{setSearch(e.target.value);
                      setSearch1(e.target.value);
        }}
      />
      
    </div>
  )
}

export default Searchbox
