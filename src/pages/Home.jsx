import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import MoviesCard from '../components/MoviesCard'
import './MovieGrid.css';

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopMovies = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setTopMovies(data.results) // Assuming the API returns a 'results' array
    } catch (error) {
      console.error("Error fetching the top movies:", error)
    }
  }

  useEffect(() => {
    const topRatedMoviesUrl = `${moviesUrl}/top_rated?${apiKey}`

    getTopMovies(topRatedMoviesUrl)
  }, [])

  return (
    <div className='container'>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
          {topMovies.length === 0 &&  <p>Loading...</p>}
          {topMovies && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
      </div>
      
    </div>
  )
}

export default Home
