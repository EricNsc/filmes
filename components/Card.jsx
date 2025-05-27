import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Card({ result }) {
  return (
    <div className="flex flex-col bg-[#292929] rounded-lg overflow-hidden w-[300px] h-auto hover:bg-[#3a7bd557] hover:scale-[1.02] transition-all duration-300">
      <Link href={`/movie/${result.id}`} passHref>
        <div className="relative w-full" style={{ paddingBottom: '150%' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path || result.backdrop_path}`}
            alt={result.title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="w-full p-4 text-white">
          <h2 className="text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden">{result.title}</h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-300 mr-1" />
            <p className="text-sm text-gray-400">{result.vote_average ? result.vote_average.toFixed(1) : 'N/A'}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
