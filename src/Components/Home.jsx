import React, { useEffect, useState } from 'react'
import "./css/Home.css"
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const {data} = await axios.get("https://api.tvmaze.com/search/shows?q=all");
            setMovie(data);
        }
        getMovies();
    }, [])
  return (
    movie.map((movie) => {
        return (
            <>
	<div class="hero-container m-auto inline-block">
		<div class="main-container w-[270px] h-[540px] relative my-3 mx-5">
			<div class="poster-container w-[230px] absolute top-0 left-5 z-50">
				<a href="#"><img src={movie.show.image.original} class="poster w-full shadow-2xl" /></a>
			</div>
			<div class="ticket-container bg-[#fff] w-[270px] h-[520px] flex flex-col items-center rounded-md absolute top-14 shadow-2xl opacity-0">
				<div class="ticket__content w-full absolute bottom-0 text-center">
					<h4 class="ticket__movie-title uppercase">{movie.show.name}</h4>
					<p class="ticket__movie-slogan text-[#999] text-base">
                        <span className='block'>Type: {movie.show.type}</span>
                        <span className='block'>Language: {movie.show.language}</span>
                        <span className='block'>Runtime: {movie.show.runtime} min</span>
					</p>
					<p class="ticket__current-price text-[#69c982] text-2xl font-bold">Ratings: {movie.show.rating.average}</p>
					<p class="ticket__old-price text-[#999] mb-3">Genres: {movie.show.genres.map((genre) => {return(<><span>{genre}</span></>)})}</p>
                    <Link to={`/movie/${movie.show.name}`}>
					<button class="ticket__buy-btn cursor-pointer w-full bg-[#2f2f2f] text-white py-4 px-0 text-base font-bold uppercase border">Book Now</button>
                    </Link>
				</div>
			</div>
		</div>
	</div>  
            </>
        )
    })
  )
}

export default Home