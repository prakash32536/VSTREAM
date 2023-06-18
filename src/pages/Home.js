import React from 'react'
import Nav from '../components/navBar/Nav'
import Banner from '../components/banner/Banner'
import Row from '../components/row/Row'
import requests from '../requests'



const Home = () => {





 
  return (
    <div>
      <Nav />
      <Banner />
      <Row title="Trending" fatchURL = {requests.fetchTreanding} />
      <Row title="V Originals" fatchURL = {requests.fetchOriginal} />
      <Row title="New Movies" fatchURL = {requests.fetchNew} />
      <Row title="Movie" fatchURL = {requests.fetchMovie} />
      <Row title="Most Liked Movies" fatchURL = {requests.fetchMostLiked} />
      <Row title="OtherMovies" fatchURL = {requests.fetchOther} />
    </div>
  )
}

export default Home
