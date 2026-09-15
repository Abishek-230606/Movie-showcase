import React from 'react'
import { formatTime } from '../utils';
import { Link } from 'react-router-dom';

export function Moviecard({movie }) {
    return (
        <Link
            to={`/movie/${movie.id}`}
            
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
    )
}

