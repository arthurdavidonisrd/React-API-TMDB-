import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
)
