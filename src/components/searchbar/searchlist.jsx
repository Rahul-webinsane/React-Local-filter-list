import React from 'react'
import './searchlist.css'
import headphone from '../../assets/headphone.png'

export function Searchlist({searchListValue}) {


  console.log("Search list page",searchListValue);
  return (
    
    <div className='search-list-container' >
      {
        searchListValue.map((data)=>(
          <div className='search-items' key={data.id}>
            <img  width='32px' height='32px' style={{objectFit:'content',marginRight:'12px'}} src={data.image} alt="" />
            <p className='title'>{data.title}</p>
           </div>
        ))
      }

{/* 

      <div className='search-items'>
        <img  width='32px' height='32px' src={headphone} alt="" />
        <p className='title'>Title</p>
      </div>

      <div className='search-items'>
      <img  width='32px' height='32px' src={headphone} alt="" />
        <p className='title'>Title</p>
      </div>

      <div className='search-items'>
      <img  width='32px' height='32px' src={headphone} alt="" />
        <p className='title'>Title</p>
      </div>

      <div className='search-items'>
      <img  width='32px' height='32px' src={headphone} alt="" />
        <p className='title'>Title</p>
      </div> */}


    </div>
  )
}
