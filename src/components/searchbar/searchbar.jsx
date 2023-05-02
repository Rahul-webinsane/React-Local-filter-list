import React from 'react'
import './searchbar.css'
import close from '../../assets/close.png'

export function Searchbar({searchValue,handleChange,clearSearch}) {
  return (
    <div className='search-input-container'>
      <input type="text" value={searchValue} placeholder='Search here...' onChange={handleChange}/>
      {
      searchValue && 
        <button onClick={clearSearch}>
        <img width='32px' height='32px'  style={{objectFit:'contain'}} src={close} alt="" />
        </button>
      }
     
    </div>
  )
}

