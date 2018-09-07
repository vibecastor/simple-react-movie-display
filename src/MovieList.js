import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './movie';

class MoviesList extends PureComponent {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3ee73681e12928e2297f0324873bfbc8&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
  padding: 1rem;
`;
