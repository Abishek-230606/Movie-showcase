import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Star, ArrowLeft, Film, User } from 'lucide-react';
import { formatTime } from '../utils';
import './MovieDetails.css';

function MovieDetails() {
    const { id } = useParams();
    
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ghibliapi.dev/films/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="loading">Loading movie details...</div>;
    }

    if (!movie) {
        return <div className="error">Movie not found!</div>;
    }
    

    return (
        <div className="movie-details-container">
            <div 
                className="movie-banner" 
                style={{ backgroundImage: `url(${movie.movie_banner})` }}
            >
                <Link to="/" className="back-button">
                    <ArrowLeft size={20} /> Back to Movies
                </Link>
            </div>

            <div className="movie-content">
                <div className="poster-wrapper">
                    <img src={movie.image} alt={movie.title} className="detail-poster" />
                </div>
                
                <div className="info-wrapper">
                    <h1 className="main-title">{movie.title}</h1>
                    <h3 className="original-title">{movie.original_title} / {movie.original_title_romanised}</h3>
                    
                    <div className="stats-row">
                        <span className="stat-badge">
                            <Calendar size={18} /> {movie.release_date}
                        </span>
                        <span className="stat-badge">
                            <Clock size={18} /> {formatTime(movie.running_time)}
                        </span>
                        <span className={`stat-badge score ${movie.rt_score > 80 ? 'high-score' : 'low-score'}`}>
                            <Star size={18} /> {movie.rt_score}%
                        </span>
                    </div>
                    
                    <div className="crew-info">
                        <p><Film size={18} /> <strong>Director:</strong> {movie.director}</p>
                        <p><User size={18} /> <strong>Producer:</strong> {movie.producer}</p>
                    </div>

                    <div className="description">
                        <h2>Overview</h2>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
