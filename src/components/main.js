import '../css/main.css'
import SearchIcon from '../search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';



const API_URL = 'https://www.omdbapi.com/?apikey=7dccf09a';

function Main() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Batman');
    }, []);
    return (
        <div className='app'>
            <h1>Tolu's MovieInfo</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="an icon for searching"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>There are no movies available</h2>
                        </div>
                    )
            }



        </div>
    );
}

export default Main;