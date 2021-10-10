import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from './styles';
import { Ionicons } from '@expo/vector-icons';

function SliderItem() {

    return (
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{
                    uri: "https://ingresso-a.akamaihd.net/prd/img/movie/shang-chi-e-a-lenda-dos-dez-aneis/99cd42d9-5d27-4a96-aa28-c5bf4c9b6fb5.jpg"
                }}
            />

            <Title numberOfLines={1}>Vingadores</Title>
            <RateContainer>
                <Ionicons
                    name="md-star"
                    size={12}
                    color="#E7a74e"
                />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    );
}

export default SliderItem;
