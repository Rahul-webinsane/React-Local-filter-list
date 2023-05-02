import React, { useEffect, useState } from 'react'
import axios from 'axios';
import searchicon from '../../assets/searchicon.png'
import { Searchbar } from './Searchbar'
import { Searchlist } from './searchlist'
import './searchcontainer.css'


export function Searchcontainer() {

  const [searchValue,setSearchValue] = useState("");
  const [searchListValue,setSearchListValue] = useState([]);

  const [filteredItems,setfilteredItems] = useState([]);


  useEffect(() => {
    fetchMovieDetails();
  },[])
  


  const fetchMovieDetails = async ()=>{
    const response = await axios('/src/samplejson/mockdata.json');
    console.log("AXIosssss",response.data);
    setSearchListValue(response.data);
    setfilteredItems(response.data)

      // fetch('/src/samplejson/mockdata.json')
      // .then((data) => {
      //     return data.json();
      // })
      // .then((data) => {
      //   console.log("Dtaaaaaaaaaa",data);
      //   setSearchListValue(data);

      // })
  }



  const handleChange =(event)=>{
    setSearchValue(event.target.value);
    const filteredItems =  searchListValue.filter((data)=>{
      return data.title.toLowerCase().includes(event.target.value);
    });
    // setSearchListValue(filteredItems);
    setfilteredItems(filteredItems);
  }

  const clearSearch =()=>{
    setSearchValue("");
    setfilteredItems([]);
    console.log("Hel");
  }

  return (
    <>
        <div className="search-container">
            <div className="heading-section">
                <img src={searchicon} alt="" />
                <h1>Looking for a movie ?</h1>
            </div>
            <Searchbar searchValue={searchValue} handleChange={handleChange} clearSearch={clearSearch}/>
             <Searchlist searchListValue={filteredItems} />
        </div>
    </>
  )
}
