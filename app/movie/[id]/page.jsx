import React from 'react'
import Header from '@/app/components/Header'
import { FaStar } from "react-icons/fa";

export default async function movie({ params }) {
  const movieID = params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`);
  const movie = await res.json();

  return (
    <div>
      <Header />
      <div className="flex flex-row bg-[#1C2541] rounded-sm overflow-hidden w-full mx-auto shadow-md shadow-[#1a212b] p-4  py-[100px]  justify-center">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title}
          className="w-[300px] h-auto rounded-md object-cover"
        />
        
        <div className="flex flex-col p-10 py-[70px] gap-4 ml-6 text-white justify-center">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-sm text-gray-400">{movie.release_date}</p>
          <p className="text-sm text-gray-300 mt-2 pt-[20px] w-[600px]">{movie.overview}</p>
          <div className="flex items-center">  
          <FaStar className="text-yellow-300 mr-1" /><span className="text-gray-400">{movie.vote_average?.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
