import './moviegrid.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../utils';

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
                    <Link 
                        to={`/movie/${movie.id}`} 
                        key={index} 
                        className="movie-item"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className='poster'>
                            <img 
                                 src={movie.image}
                                alt={movie.title}
                                className='movie-poster' 
                            />
                        </div>
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                            <p>{formatTime(movie.running_time)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MovieGrid;