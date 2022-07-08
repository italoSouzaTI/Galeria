import styled from 'styled-components/native';
import { ImageBackground, Image } from 'react-native';


export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled(ImageBackground)`
  flex:1;
  width: 100%;
  aspect-ratio: 1;
`;
