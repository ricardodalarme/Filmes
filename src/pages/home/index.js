import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Container,
  SearchButton,
  SearchContainer,
  Input,
  Title,
  BannerButton,
  Banner,
  SliderMovie
} from './styles';
import Header from '../../components/header';
import SliderItem from '../../components/slider_item';
import { Feather } from '@expo/vector-icons';

function Home() {
  return (
    <Container>
      <Header title="Home" />
      <SearchContainer>
        <Input
          placeholder="Procurar algo?"
          placeholderTextColor="#ddd"
        />

        <SearchButton>
          <Feather
            name="search"
            size={30}
            color="#FFF"
          />
        </SearchButton>
      </SearchContainer>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Title>Em cartaz</Title>
        <BannerButton
          activeOpacity={0.9}
          onPress={() => alert('t')}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/shang-chi-e-a-lenda-dos-dez-aneis/99cd42d9-5d27-4a96-aa28-c5bf4c9b6fb5.jpg'
            }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />
      </ScrollView>

    </Container>
  );
}

export default Home;
