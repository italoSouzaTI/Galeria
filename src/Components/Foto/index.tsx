import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { Container, ContainerImage, ImageView } from './styles';

interface ImageProps {
    img: string;
}

const Foto: React.FC = ({ img }: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1500);
    }, [])

    function onLoadend () {
        Animated.timing(opacity, {
            duration: 800,
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    return (
        <Container>
            <ContainerImage
                source={img}
                blurRadius={4}
            >
                {
                    isLoaded && (
                        <Animated.Image
                            style={[{
                                flex: 1,
                                width: 500,
                                height: 500,
                                aspectRatio: 1
                            }, { opacity }]}
                            source={img}
                            onLoadEnd={onLoadend}
                        />
                    )
                }
            </ContainerImage>
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