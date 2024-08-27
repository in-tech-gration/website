'use client';

import Script from "next/script";
import "./watch.css";
import { useEffect, useState } from 'react';
// import Image from 'next/image' // Fuck this!
import { useSearchParams, useRouter } from 'next/navigation';
import Theater from "@/public/images/hackers.theater.png";

// @ts-ignore
function value(movie, prop) {
  if (prop === "release_date"){
    const releaseData = movie.release_date ? movie.release_date : movie.first_air_date;
    return new Date(releaseData).valueOf();
  } else {
    if ( prop === "title" && movie.type ){
      return movie.original_name;
    }
    return movie[prop]
  }
}

// @ts-ignore
function MovieItem({ movie }) {

  const router = useRouter()

  return (
    <li className="item bg-black" id={`movie-${movie.id}`}>
      <a href={`?movie=${movie.id}`} onClick={e => {
        e.preventDefault();
        const newUrl = new URL(window.location.href);
        router.push(`watch?${newUrl.searchParams.toString()}&movie=${movie.id}`);

      }}>
        {/* eslint-disable-next-line */}
        <img
          alt=""
          className="thumb"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
        <span className="title">
          {movie.type === "Miniseries" || movie.type === "Scripted" ? movie.name : movie.title} 
          <span className="font-normal">
            {(!movie.type) ? (` (${new Date(movie.release_date).getFullYear()})`) : (` (${new Date(movie.first_air_date).getFullYear()})`) }
          </span>
        </span>
      </a>
    </li>

  )
}

function Details({ movie }: { movie:any }) {

  const router = useRouter();
  const watchOn = movie.watch_on;
  let youTube:any = null;
  if ( watchOn ){
    if ( watchOn.youtube ){
      youTube = watchOn.youtube;
    }
  }

  function goBack(){
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete("movie");
    router.push(`watch?${newUrl.searchParams.toString()}`);
  }

  return (
    <section id="details">

      <span 
        onClick={e => {
          e.preventDefault();
          goBack();
        }}
        className="text-white text-9xl font-thin cursor-pointer fixed top-0 right-12" 
        dangerouslySetInnerHTML={{ __html: `&times;` }}></span>

      <a href="?list" onClick={e => {
        e.preventDefault();
        goBack();
      }}>
        {/* eslint-disable-next-line */}
        <img
          id="hero"
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt="" />
        <h4 className="title title--single text-white">{movie.type === "Miniseries" || movie.type === "Scripted" ? movie.name : movie.title}</h4>
        <p className="overview text-white">{movie.overview}</p>

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

  const searchParams = useSearchParams();
  const selectedGenres = searchParams?.get("genres")?.split(",");
  const selectedSortedBy = searchParams?.get("sorted_by");

  const [movies, setMovies] = useState(new Map());
  const [sortedBy, setSortedBy] = useState<string>( selectedSortedBy ? selectedSortedBy : "title" );
  const [genreSortBy, setGenreSortBy ] = useState( selectedGenres ? selectedGenres : ["movies","series","documentary"]);

  let selectedMovie = null;
  let selectedMovieId: string | null = null;
  if (searchParams) {
    selectedMovieId = searchParams.get('movie');
    if (selectedMovieId) {
      const movie = movies.get(+selectedMovieId);
      selectedMovie = movie;
    }
    if (typeof window !== "undefined") {
      window.document.documentElement.classList.toggle("details", searchParams.has("movie"));
    }
  }

  useEffect(function fetchMovieData(){

    if (typeof window !== "undefined") {
      window.document.documentElement.className = "js";
    }

    fetch('/assets/watch/data.json')
      .then((res) => res.json())
      .then(({ results }) => {
        // @ts-ignore
        setMovies(new Map(results.map(movie => [movie.id, movie])));
      })
      .catch(error => console.log(error));

  }, [])

  useEffect(function updateQueryString(){

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('sorted_by'); 
    newUrl.searchParams.append('sorted_by', sortedBy); 
    newUrl.searchParams.delete('genres'); 
    if ( genreSortBy.length < 3 ){
      newUrl.searchParams.append('genres', genreSortBy.toString()); 
    }
    history.pushState(null, "", newUrl.toString());

  },[sortedBy,genreSortBy])

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
      <div className="relative bg-no-repeat bg-cover h-screen opacity-70" style={{ backgroundImage: `url(${Theater.src})` }}></div>
      <main>
        <div className="content">
          <section id="list">

            <h1 className="text-center text-white text-8xl font-thin mt-10">A Hacker's Watch List</h1>

            <div className="forms flex justify-center m-16 gap-4">

              <form id="sorter" onChange={e => {
                // @ts-ignore
                setSortedBy(e.target.value);
              }}>
                Sort by:
                {/* <label>
                  <input
                    type="radio"
                    name="sort"
                  />
                  <span>ID</span>
                </label> */}
                <label>
                  <input checked={sortedBy === "title"} type="radio" name="sort" value="title" readOnly />
                  <span>Title</span>
                </label>
                <label>
                  <input checked={sortedBy === "release_date"} type="radio" name="sort" value="release_date" readOnly />
                  <span>Release Date</span>
                </label>
              </form>

              <form id="genre_sorter" onChange={e => {
                // @ts-ignore
                setGenreSortBy( prev => {
                  // @ts-ignore
                  const value = e.target.value;
                  // @ts-ignore 
                  if ( prev.includes(value) ){
                    return prev.filter( v => v !== value );
                  }
                  return [...prev, value];
                });
              }}>
                Genre:
                <label>
                  <input
                    type="checkbox"
                    name="genre"
                    defaultValue="movies"
                    defaultChecked={!selectedGenres || selectedGenres?.includes("movies")}
                  />
                  <span>Movie</span>
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="genre" 
                    defaultChecked={!selectedGenres || selectedGenres?.includes("series")}
                    defaultValue="series" 
                    />
                  <span>Series</span>
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="genre" 
                    defaultValue="documentary" 
                    defaultChecked={!selectedGenres || selectedGenres?.includes("documentary")}
                    />
                  <span>Documentary</span>
                </label>
              </form>

            </div>

            <ul>
              {/* @ts-ignore */}
              {sortedMovies.map(movie => {

                const type = movie.genres.some((g:any) =>{
                  return g.name === "Documentary";
                }) ? "documentary" : movie.type ? "series" : "movies"; 

                if ( !genreSortBy.includes(type) ){
                  return null;
                }

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
      {page}
    </>
  )
}

