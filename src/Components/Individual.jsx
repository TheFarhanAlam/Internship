import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import "./css/Individual.css"
import axios from 'axios';

function Individual() {
    const [movieDetails, setMovieDetails] = useState();
    const name = useParams().name;
    useEffect(() => {
        async function getIndividual() {
            const {data} = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
            setMovieDetails(data);
            console.log(data);
        }
        getIndividual();
    }, [])
    const detail = movieDetails;
    const saveStorage = () => {
        localStorage.setItem("detail", JSON.stringify(detail));
    }
  return (
      <>
      {detail ? <>
    <div>
        <div class='container-fluid'>
        <div class="card  mx-auto col-md-3 col-10 mt-5">
            <img class='mx-auto img-thumbnail'
                src={movieDetails.image.original}
                width="auto" height="auto"/>
            <div class="card-body text-center mx-auto">
                <div class='cvp'>
                    <h5 class="card-title font-weight-bold">{movieDetails.name}</h5>
                    <p class="card-text">{movieDetails.summary.toString()}</p>
                    <Link to={"/"}>
                    <p class="btn details broder text-[#212121] w-full shadow-2xl px-auto">Go Back</p><br />
                    </Link>
                    <Link to={"/bookTicket"} onClick={saveStorage}>
                    <p href="#" class="btn cart bg-[#212121] text-white mt-[10px] text-sm font-black w-full h-[39px] pt-[9px] shadow-xl px-auto">Book Movie Ticket</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
      </> :
      <>
      <svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
		<g transform="translate(9.5,19)">
			<circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
			<g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
				<circle class="bike__spokes" r="5" />
				<circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
			</g>
		</g>
		<g transform="translate(24,19)">
			<g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
				<circle class="bike__pedals" r="4" />
				<circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
			</g>
		</g>
		<g transform="translate(38.5,19)">
			<circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
			<g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
				<circle class="bike__spokes" r="5" />
				<circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
			</g>
		</g>
		<polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
		<polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
		<path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
		<polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
	</g>
</svg>
      </>
      }
    </>
  )
}

export default Individual