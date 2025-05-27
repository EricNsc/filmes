import React from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import "./globals.css";

const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }) {
  const genreParam = searchParams.genre || "fetchTrending";

  // Verifica se o parâmetro é um ID de gênero numérico
  const isGenreID = !isNaN(genreParam);

  const getEndpoint = () => {
    if (isGenreID) {
      return `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreParam}`;
    }
    return genreParam === 'fetchTopRated' 
      ? `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
      : `/trending/movie/week?api_key=${API_KEY}&language=pt-BR`;
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${getEndpoint()}&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return (
    <>
      <main>
        <Header genre={genreParam} />
        <Results Results={data.results} />
      </main>
    </>
  );
}