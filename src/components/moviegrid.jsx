import './moviegrid.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../utils';
import {Moviecard} from './Moviecard.jsx'

function MovieGrid({searchQuery}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.dev/films')
            .then(response => response.json())
            .then(data => { setMovies(data); });
    }, []);

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div className='moviegrid-wrapper'>
            <div className='Movie-title'>All Movies</div>
            <div className='movie-grid'>
                {filteredMovies.map((movie, index) => (
                    <Moviecard movie={movie} key={index} />
                ))}
            </div>
        </div>
    );
}

export default MovieGrid;