import React, { useEffect, useState } from 'react'
import { StyledBannerParentDiv, StyledBannerContentsDiv, StyledBannerTitle, StyledBannerButtonsDiv, StyledBannerButton, StyledBannerDescription, StyledEmptyDiv } from './Styled'
import axios from '../../axios'
import requests from '../../requests'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Banner = () => {

  const [movie, setmovie] = useState([])
  const [tralerURL, settralerURL] = useState("")


  const handleClick = (movie) =>{
    if (tralerURL){
      settralerURL('');
    }else{
     movieTrailer(movie?.name || movie?.title)
     .then(url => {
       const urlParams = new URLSearchParams(new URL(url).search)
       settralerURL(urlParams.get('v'))
     }).catch(error => console.log("youtube traler error", error))
    }
 }
  

 const opts = {
   height: '400',
   width: '100%',
   playerVars: {
    //  https://developers.google.com/youtube/player_parameters
     autoplay: 1,
   }
 }

  useEffect(() => {
    async function fatchData() {
      const request = await axios.get(requests.fetchTreanding);
      setmovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    return request;
    }


    fatchData()
  }, [])



  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <StyledBannerParentDiv onClick={()=>handleClick(movie)} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}>
      <StyledBannerContentsDiv>
        <StyledBannerTitle>{movie?.name || movie?.title || movie?.original}</StyledBannerTitle>
        <StyledBannerButtonsDiv>
          <StyledBannerButton onClick={()=>handleClick(movie)}>Play</StyledBannerButton>
          {/* <StyledBannerButton>My List</StyledBannerButton> */}
        </StyledBannerButtonsDiv>
        <StyledBannerDescription>{truncate(`${movie?.overview}`, 150)}</StyledBannerDescription>
      </StyledBannerContentsDiv>
      <StyledEmptyDiv />
      {tralerURL &&<YouTube videoId={tralerURL} opts={opts}  />}
    </StyledBannerParentDiv>
  )
}

export default Banner
