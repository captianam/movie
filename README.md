# 🎬 Movie Browser App

A sleek and responsive movie browsing application built with [Angular](https://angular.io/). Users can search for movies
The application that allows users to search for movies, browse popular ones, and view movie details. Optionally, users can also add movies to a watchlist stored in localStorage.
📌 Features
1. Search Movies
* Use TMDB API to search movies by title.
* Show real-time search results as the user types (debounced).
* Display movie poster, title, rating, release date.

2. Popular Movies
* Display trending or popular movies by default when app loads.
* Use TMDB’s /movie/popular endpoint.
