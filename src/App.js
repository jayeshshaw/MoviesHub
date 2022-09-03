import React from 'react';
import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';
//b194dbf

const API_URL='http://www.omdbapi.com?apikey=b194dbf';


const App=(()=>{
    const [Movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies =async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }
    // useEffect(()=>{
    //     searchMovies('hello');
    // },[]);



    return (
        <div className="app">
            <h1>MoviesHub !</h1>
            <div className="search">
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
                <img 
                    src={searchIcon}
                    alt="Search"
                    onClick={()=>{searchMovies(searchTerm)}}
                />
            </div>

            {
                 Movies.length > 0
                 ? (
                     <div className="container">
                        {Movies.map((movie)=>(
                         <MovieCard movie={movie} />
                        ))}
                     </div>
                 ):(
                     <div className="empty">
                         <h2>No movies found</h2>
                     </div>
                 )
            }
            
        </div>
    );
});

export default App;