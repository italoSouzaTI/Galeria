import React, { useRef, useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foto from '../Foto';
import {
    Container,
    Header,
    BtnClose,
    ViewClose,
    Corpo,
    ViewPhoto,
    Footter,
    Separetor,
    BtnActionImage,

} from './styles';
interface ImageProps {
    photo: string[];
}

const Galeria: React.FC = ({ photo }: ImageProps) => {
    const [indexState, setIndexState] = useState(0);
    const [indexState2, setIndexState2] = useState(0);
    const ref = useRef<FlatList>(null);
    const ref2 = useRef<FlatList>(null);

    function actionSlideBtn (state, index) {
        const aux = index
        state(aux)
        console.log(index)
    }
    useEffect(() => {
        ref.current?.scrollToIndex({
            index: indexState,
            animated: true,
        })
    }, [indexState])

    useEffect(() => {
        ref2.current?.scrollToIndex({
            index: indexState2,
            animated: true,
        })
    }, [indexState2])


    return (
        <Container>
            <Header>
                <ViewClose>
                    <BtnClose>
                        <AntDesign name="closecircle" size={26} color="#fff" />
                    </BtnClose>
                </ViewClose>
            </Header>
            <Corpo>
                <ViewPhoto
                >
                    <FlatList
                        ref={ref}
                        ItemSeparatorComponent={() => (
                            <Separetor />
                        )}
                        initialScrollIndex={indexState}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={photo}
                        keyExtractor={(item: any) => item.key}
                        renderItem={({ item, index }: any) => (
                            <>
                                <BtnActionImage
                                    onPress={() => actionSlideBtn(setIndexState2, index)}
                                    activeOpacity={1}
                                >
                                    <Foto
                                        img={item.img}
                                    />
                                </BtnActionImage>
                            </>

                        )}
                    // onViewableItemsChanged={indexChanged.current}
                    />

                </ViewPhoto>
            </Corpo>

            <Footter>
                <FlatList
                    ref={ref2}
                    ItemSeparatorComponent={() => (
                        <Separetor />
                    )}
                    initialScrollIndex={indexState2}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={photo}
                    keyExtractor={(item: any) => item.key}
                    renderItem={({ item, index }: any) => (
                        <>
                            <BtnActionImage
                                onPress={() => actionSlideBtn(setIndexState, index)}
                            >
                                <Foto
                                    img={item.img}
                                />
                            </BtnActionImage>
                        </>
                    )}

                />
            </Footter>
        </Container>
    );
}

export default Galeria;