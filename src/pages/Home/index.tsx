import React, {useState} from 'react';
import {Alert} from 'react-native';
import api from '../../services/API';

import {Container} from './styles';

import Search from '../../components/Search';
import MovieList from '../../components/MovieList';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const Home: React.FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');

  const searchMovie = async () => {
    try {
      const response = await api.get(`4/search/movie?page=1&query=${search}`);
      setMoviesList(response.data.results);
    } catch (e) {
      console.log(e);
      Alert.alert('Erro', 'Erro ao consultar Filmes!', [{text: 'Entendi'}], {
        cancelable: false,
      });
    }
  };

  return (
    <Container>
      <Search
        value={search}
        onChangeText={text => setSearch(text)}
        searchMovie={searchMovie}
      />
      <MovieList movies={moviesList} />
    </Container>
  );
};

export default Home;
