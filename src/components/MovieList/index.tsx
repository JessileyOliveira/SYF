import React from 'react';

import {Container, List} from './styles';
import Movie from '../../components/Movie';

interface MovieItem {
  id: number;
  poster_path: string;
  title: string;
}

interface props {
  movies: MovieItem[];
}

const MovieList: React.FC<props> = ({movies}) => {
  return (
    <Container>
      <List
        numColumns={3}
        data={movies}
        onEndReachedThreshold={0.5}
        renderItem={movie => (
          <Movie
            key={String(movie.item.id)}
            title={movie.item.title}
            poster_path={movie.item.poster_path}
          />
        )}
      />
    </Container>
  );
};

export default MovieList;
