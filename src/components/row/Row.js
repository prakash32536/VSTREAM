import React, { useEffect, useState } from 'react'
import { StyledRowTitleH2, StyledRowDiv, StyledRowImg } from './Styled'
import axios from '../../axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({title, fatchURL , isLargeRow = false}) => {

  const [movies, setmovies] = useState([])
  const [tralerURL, settralerURL] = useState("")


  useEffect(()=>{
    async function fatchData (){
      const request = await axios.get(fatchURL)
      setmovies(request.data.results)
      return request
    }

    fatchData()
  }, [fatchURL])
  console.log(movies)


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
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
   return (
    <div>
      <StyledRowTitleH2>{title}</StyledRowTitleH2>
      <StyledRowDiv className='row_posters'>
        {movies.map(movie=>(
           <StyledRowImg key={movie.id} onClick={()=>handleClick(movie)} className='row_poster' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}`} alt={movie.name}/>
        ))}
      </StyledRowDiv>
      {tralerURL &&<YouTube videoId={tralerURL} opts={opts}  />}
    </div>
  )
}

export default Row;
