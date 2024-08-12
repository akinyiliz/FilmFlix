# FilmFlix

FilmFlix is a web application that allows users to search for movies, view details, and manage a personal watchlist. The movie data is sourced from [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).

## Features

- **Search for Movies:** Users can search for movies by title.
- **Movie Details:** View detailed information about each movie/tv show, including title, tagline, overview, rating, release date, duration, genre, and production countries.
- **Watchlist Management:** Users can add movies to their watchlist and manage it easily. If a movie is already in the watchlist, the button will display "Added" instead of "Add to Watchlist."

## Tech Stack

- **Frontend:** React, Next.js
- **API:** The Movie Database (TMDb) API
- **State Management:** React Context API
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and yarn installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/akinyiliz/FilmFlix.git
   cd filmflix
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your TMDb API key:

   ```bash
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Run the development server:

   ```bash
   yarn run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- **Adding to Watchlist:** Browse through the movie details and click on "Add to Watchlist" to save your favorite movies. The button will change to "Added" if the movie is already in your watchlist.
- **Viewing Watchlist:** Navigate to the Watchlist page to see all the movies you've added.

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data.
