import './moviegrid.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



function MovieGrid() {
    // making memory
    const [movies, setMovies] = useState([]);

    // fecthing now the api and updating the memory

    useEffect(() => {
        fetch('https://ghibliapi.dev/films')
            .then(response => response.json())
            .then(data => { setMovies(data); }
            );
    }, []);

    return (
        <div className='moviegrid-wrapper'>
            <div className='Movie-title'>All Movies</div>
            <div className='movie-grid'>
                {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
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
                            <p>{movie.running_time} minutes</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MovieGrid;