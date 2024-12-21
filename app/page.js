import React from "react";
import Header from "./components/Header";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending"; 

  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' 
        ? `/movie/top_rated` 
        : `/trending/movie/week` 
    }?api_key=${API_KEY}&language=pt-BR&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return (
    <>
      <main>
        <Header genre={genre} /> 
        <Results Results={data.results} />
      </main>
    </>
  );
}
