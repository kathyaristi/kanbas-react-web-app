import React from "react";

import {BrowserRouter, Routes, Route}

  from "react-router-dom";

import MovieList

  from "./screens/movie-list";

import MovieDetails

  from "./screens/movie-details";

function App() {

 return (

  <div className="container">

   <BrowserRouter>

    <Routes>

     <Route path="/movies"

            element={<MovieList/>}/>

     <Route path="/movies/details/:mid"

            element={<MovieDetails/>}/>

    </Routes>

   </BrowserRouter>

  </div>

 );

}

export default App;