import './hero.css'
import { useState, useEffect } from 'react'
import { Clock, Star } from 'lucide-react';

function Hero() {

    const [topMovies, settopMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://ghibliapi.dev/films')
            .then(response => response.json())
            .then(data => {
                const highrated = data
                    .filter(movie => Number(movie.rt_score) > 90)
                    .slice(0, 5);

                settopMovies(highrated);
            });
    }, []);

    useEffect(() => {

        if (topMovies.length === 0) return;

        const timer = setInterval(() => {

            setCurrentIndex((prevIndex) => (prevIndex + 1) % topMovies.length);

        }, 5000);

        return () => clearInterval(timer);
    }, [topMovies.length]);

    if (topMovies.length === 0) {
        return <div className="hero-container loading">Loading top movies...</div>;
    }

    const currentMovie = topMovies[currentIndex];
    return (
        <div className="hero-container">
            <div 
                className="hero-image"
                style={{ backgroundImage: `url(${currentMovie.movie_banner})` }}
            >
            </div>
            
            <div className="hero-details">
                <h1>{currentMovie.title}</h1>
                <p>
                    <Clock size={28} color="#ef8d05" /> 
                    <span>Screen Time: {currentMovie.running_time} mins</span>
                </p>
                <p>
                    <Star size={28} color="#ef8d05" fill="#ef8d05" /> 
                    <span>Rating: {currentMovie.rt_score}%</span>
                </p>
            </div>
        </div>
    );
}

export default Hero;