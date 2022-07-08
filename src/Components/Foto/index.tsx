import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, ActivityIndicator } from 'react-native';

import { Container, ContainerImage } from './styles';

interface ImageProps {
    img: string;
    height?: number;
}

const Foto: React.FC = ({ img, height = 500 }: ImageProps) => {
    const opacity = useRef(new Animated.Value(0)).current;

    function onLoad () {
        Animated.timing(opacity, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    return (
        <Container>
            <ContainerImage>
                <ActivityIndicator size="large" color="red" />
            </ContainerImage>
            <Animated.Image
                style={[{
                    flex: 1,
                    width: '100%',
                    height: height,
                    aspectRatio: 1,
                    position: 'absolute'
                }, { opacity }]}
                source={img}
                onLoad={onLoad}
            />

        </Container >
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 500,
        height: 500,
        aspectRatio: 1
    }
})

export default Foto;