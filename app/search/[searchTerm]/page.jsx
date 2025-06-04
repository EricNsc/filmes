import React from "react";
import Results from "@/components/Results"; 
import Header from "@/components/Header";

export default async function SearchPage({ params }) {
  const { searchTerm } = params; 
  const API_KEY = process.env.API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR`
  );

  if (!response.ok) {
    return <h1>Erro ao buscar os filmes</h1>;
  }

  const data = await response.json();
  const results = data.results;

  return (
    <div>
        <Header />
      {results && results.length === 0 && <h1>Nenhum filme encontrado</h1>}
      {results && results.length > 0 && <Results Results={results} />}
    </div>
  );
}
