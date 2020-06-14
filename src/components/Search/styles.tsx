import styled from 'styled-components/native';
import FontistoSearchIcon from 'react-native-vector-icons/Fontisto';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 4px;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin: 0px;
  padding: 0px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const SearchIcon = styled(FontistoSearchIcon)`
  padding: 0px 8px 0px 16px;
`;
