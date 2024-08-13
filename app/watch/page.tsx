'use client';

import Script from "next/script";
import "./watch.css";
import { useEffect, useState } from 'react';
// import Image from 'next/image' // Fuck this!
import { useSearchParams, useRouter } from 'next/navigation';

// @ts-ignore
function value(movie, prop) {
  if (prop === "release_date")
    return new Date(movie.release_date).valueOf();
  else
    return movie[prop]
}

// @ts-ignore
function MovieItem({ movie }) {

  const router = useRouter()

  return (
    <li className="item" id={`movie-${movie.id}`}>
      <a href={`?movie=${movie.id}`} onClick={e => {
        e.preventDefault();
        router.push(`watch?movie=${movie.id}`);

      }}>
        {/* eslint-disable-next-line */}
        <img
          alt=""
          className="thumb"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
        <span className="title">{movie.type === "Miniseries" || movie.type === "Scripted" ? movie.name : movie.title} </span>
      </a>
    </li>

  )
}

// @ts-ignore
function Details({ movie }) {

  const router = useRouter();
  const watchOn = movie.watch_on;
  let youTube = null;
  if ( watchOn ){
    if ( watchOn.youtube ){
      youTube = watchOn.youtube;
    }
  }

  return (
    <section id="details">
      <a href="?list" onClick={e => {
        e.preventDefault();
        router.push(`watch`);
      }}>
        {/* eslint-disable-next-line */}
        <img
          id="hero"
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt="" />
        <h4 className="title title--single">{movie.type === "Miniseries" || movie.type === "Scripted" ? movie.name : movie.title}</h4>
        <p className="overview">{movie.overview}</p>

        { watchOn && (

        <div className="watch-them mt-4">
          Watch on:

          { youTube && (
            <button className="bg-red-700 ml-2 text-white py-2 px-6 rounded-full" onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              const link = document.createElement("a");
              link.href = "https://youtube.com/watch?v=" + youTube;
              link.target = "_blank";
              link.click();
            }}>
              YouTube
            </button>
          )} 
          
        </div>

        )}

      </a>
    </section>
  )
}

// Based on: https://tympanus.net/codrops/?p=75261
// Tutorial: https://tympanus.net/codrops/2024/01/19/making-css-view-transitions-easy-with-velvette/
// Demo: https://tympanus.net/Tutorials/Velvette/
export default function Watch() {

  const [movies, setMovies] = useState(new Map());
  const [sortedBy, setSortedBy] = useState<"title" | "release_date" | "id">("title");
  const searchParams = useSearchParams();
  let selectedMovie = null;
  let selectedMovieId: string | null = null;
  if (searchParams) {
    selectedMovieId = searchParams.get('movie');
    if (selectedMovieId) {
      const movie = movies.get(+selectedMovieId);
      selectedMovie = movie;
    }
    document.documentElement.classList.toggle("details", searchParams.has("movie"));
  }

  useEffect(() => {

    document.documentElement.className = "js";

    fetch('/assets/watch/data.json')
      .then((res) => res.json())
      .then(({ results }) => {
        // @ts-ignore
        setMovies(new Map(results.map(movie => [movie.id, movie])));
      })
      .catch(error => console.log(error));

  }, [])

  const sortedMovies = Array.from(movies.values())
    .sort((a, b) => {
      const valueA = value(a, sortedBy);
      const valueB = value(b, sortedBy);
      if (typeof valueA === "string") {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      }
      return valueA - valueB;
    });

  return (
    <section>
      <main>
        <div className="content">
          <section id="list">

            <div className="forms flex justify-center m-16 gap-4">

              <form id="sorter" onChange={e => {
                // @ts-ignore
                setSortedBy(e.target.value);
              }}>
                Sort by:
                <label>
                  <input
                    type="radio"
                    name="sort"
                  />
                  <span>ID</span>
                </label>
                <label>
                  <input defaultChecked={true} type="radio" name="sort" defaultValue="title" />
                  <span>Title</span>
                </label>
                <label>
                  <input type="radio" name="sort" defaultValue="release_date" />
                  <span>Release Date</span>
                </label>
              </form>

              <form id="genre_sorter" onChange={e => {
                // @ts-ignore
                // setSortedBy(e.target.value);
              }}>
                Genre:
                <label>
                  <input
                    type="checkbox"
                    name="genre"
                    defaultValue="movie"
                    defaultChecked={true}
                  />
                  <span>Movie</span>
                </label>
                <label>
                  <input defaultChecked={true} type="checkbox" name="genre" defaultValue="series" />
                  <span>Series</span>
                </label>
                <label>
                  <input type="checkbox" name="genre" defaultValue="documentary" defaultChecked={true} />
                  <span>Documentary</span>
                </label>
              </form>

            </div>

            <ul>
              {/* @ts-ignore */}
              {sortedMovies.map(movie => {
                // @ts-ignore
                return <MovieItem movie={movie} key={movie.id} />
              })}
            </ul>

          </section>

          {selectedMovie && <Details movie={selectedMovie} />}

        </div>
      </main>
      <Script src="assets/watch/velvette.js" />
      <Script src="assets/watch/index.js" />

    </section>
  );
}

// @ts-ignore
Watch.getLayout = function getLayout(page) {
  return (
    <>
      <h1>aaa</h1>
      {page}
    </>
  )
}
