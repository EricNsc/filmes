import React from "react";
import Header from "@/components/Header";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default async function Movie({ params }) {
  const movieID = params.id;

  try {
    const [movieRes, recommendationsRes] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}&language=pt-BR`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.API_KEY}&language=pt-BR`
      ),
    ]);

    if (!movieRes.ok || !recommendationsRes.ok) {
      throw new Error("Erro ao buscar os dados.");
    }

    const movie = await movieRes.json();
    const recommendations = await recommendationsRes.json();

    return (
      <div>
        <Header />
        <div className="flex flex-row rounded-sm overflow-hidden w-full mx-auto p-4 py-[100px] justify-center relative">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center rounded-sm opacity-50"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                movie.backdrop_path || movie.poster_path
              })`,
              filter: "blur(25px)",
            }}
          ></div>

          <div className="absolute inset-0 -z-10 bg-black bg-opacity-50 rounded-sm"></div>

          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-[300px] h-auto rounded-md object-cover"
          />
          <div className="flex flex-col p-10 py-[70px] gap-4 ml-6 text-white justify-center">
            <h1
              className="text-3xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              {movie.title}
            </h1>
            <p
              className="text-sm text-gray-300"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
            >
              {movie.release_date}
            </p>
            <p
              className="text-sm text-gray-200 mt-2 pt-[20px] w-[600px]"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
            >
              {movie.overview}
            </p>
            <div className="flex items-center">
              <FaStar
                className="text-yellow-300 mr-1"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
              />
              <span
                className="text-gray-300"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
              >
                {movie.vote_average?.toFixed(1)}
              </span>
            </div>

            {/* Exibindo os gêneros */}
            <div className="flex flex-wrap gap-2 mt-4">
  {movie.genres?.map((genre) => (
    <a
      key={genre.id}
      href={`/?genre=${genre.id}`}
      className="text-xs bg-[#37435a] rounded-full px-3 py-1 hover:bg-[#445571] transition-colors cursor-pointer"
    >
      {genre.name}
    </a>
  ))}
</div>
          </div>
        </div>

        <div className="p-4 px-16">
          <h2 className="text-2xl font-bold text-white mb-10 mt-10">
            Recomendações
          </h2>
          <div className="flex overflow-x-auto gap-10 px-10 snap-x snap-mandatory scroll-smooth">
            {recommendations.results.map((recommendedMovie) => (
              <div
                key={recommendedMovie.id}
                className="flex-shrink-0 w-[200px] h-[350px] snap-start mb-6 bg-[#27272c] rounded-lg overflow-hidden hover:bg-[#3855a7] transition-all duration-300"
              >
                <Link
                  href={`/movie/${recommendedMovie.id}`}
                  className="flex flex-col items-center "
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${recommendedMovie.poster_path}`}
                    alt={recommendedMovie.title}
                    className="w-[200px] h-[300px] rounded-top-md object-cover"
                  />
                  <p className="text-white text-left my-4 text-sm truncate max-w-[150px]">
                    {recommendedMovie.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Erro ao carregar os dados: {error.message}</div>;
  }
}
