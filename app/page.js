import React from "react";
import Header from "./components/Header";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Page() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return (
    <>
      <main>
        <Header />
        <Results Results={data.results} />
      </main>
    </>
  );
}
