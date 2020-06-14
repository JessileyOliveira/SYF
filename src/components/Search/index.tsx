import React from 'react';

import {Container, Input, SearchIcon} from './styles';

interface props {
  value: string;
  onChangeText: (value: string) => void;
  searchMovie: () => void;
}

const Search: React.FC<props> = ({value, onChangeText, searchMovie}) => {
  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Search your Film or Serie"
      />
      <SearchIcon name="search" size={20} color="#000" onPress={searchMovie} />
    </Container>
  );
};

export default Search;
