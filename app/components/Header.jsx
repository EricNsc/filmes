import React from "react";
import Link from "next/link";
import Search from "./Search";
import "../styles/header.css";

export default function Header({ genre }) { 
  return (
    <div className="header-container">
      <Link href="/" passHref>
        <h1 className="recommend">FILMES</h1>
      </Link>
      <Search />

      <div className="ml-auto">
        <Link
          className={`hover:text-[#3855a7] font-semibold mr-6 ${
            genre === "fetchTrending"
              ? 'underline underline-offset-8 decoration-[#3855a7] decoration-2 rounded-lg' // Aumenta a espessura do underline
              : ''
          }`}
          href={`/?genre=fetchTrending`}
        >
          POPULARES
        </Link>
        <Link
          className={`hover:text-[#3855a7] font-semibold ${
            genre === "fetchTopRated"
              ? 'underline underline-offset-8 decoration-[#3855a7] decoration-2 rounded-lg' // Aumenta a espessura do underline
              : ''
          }`}
          href={`/?genre=fetchTopRated`}
        >
          MELHORES AVALIADOS
        </Link>
      </div>
    </div>
  );
}
