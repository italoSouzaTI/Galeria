import styled from 'styled-components/native';
import { View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'


export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;

`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 80px;
`;
export const ViewClose = styled.View`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items:flex-end;
`;
export const BtnClose = styled(TouchableOpacity)``;

export const Corpo = styled.View`
  flex: 2;

  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

`;

export const ViewPhoto = styled.View`
    flex: 1;
    width: ${Dimensions.get('window').width}px;

`;


export const Separetor = styled.View`
  margin: 5px;
`;

export const Footter = styled.View`
  flex: 1;
  max-height: 80px;
`;


export const BtnActionImage = styled(TouchableOpacity)`
`;