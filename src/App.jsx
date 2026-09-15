import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import MovieGrid from './components/moviegrid'; 
import MovieDetails from './components/MovieDetails';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <BrowserRouter>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <MovieGrid searchQuery={searchQuery} />
                    </>
                } />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;