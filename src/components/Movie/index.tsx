import React from 'react';
import {Container, Poster, Title} from './styles';

interface MovieData {
  poster_path: string;
  title: string;
}

const Movie: React.FC<MovieData> = ({poster_path, title}) => {
  return (
    <Container>
      <Poster
        style={{}}
        source={{uri: `https://image.tmdb.org/t/p/w185/${poster_path}`}}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default Movie;
