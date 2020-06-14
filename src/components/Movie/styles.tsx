import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
  margin: 4px;
  border-radius: 4px;
  max-width: ${() => `${(Number(Dimensions.get('screen').width) - 32) / 3}px`};
`;

export const Poster = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  padding: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  color: #444;
`;
