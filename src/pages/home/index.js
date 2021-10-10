import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
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
import api, { key } from '../../services/api';
import { getListMovies } from '../../utils/movie';
function Home() {
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    let isActive = true;
    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get(

          '/movie/now_playing',
          {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1
            }
          }
        ),

        api.get(

          '/movie/popular',
          {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1
            }
          }
        ),

        api.get(

          '/movie/top_rated',
          {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1
            }
          }
        )
      ])

      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(5, popularData.data.results);
      const topList = getListMovies(5, topData.data.results);

      setNowMovies(nowList)
      setPopularMovies(popularList)
      setTopMovies(topList)
    }
    getMovies();
  }, [])

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
          keyExtractor={(item) => String(item.id)}

          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={nowMovies}
          renderItem={({ item }) => <SliderItem
            data={item}
          />}
        />

        <Title>Populares</Title>
        <SliderMovie
          keyExtractor={(item) => String(item.id)}

          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={popularMovies}
          renderItem={({ item }) => <SliderItem
            data={item}
          />}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          keyExtractor={(item) => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          data={topMovies}
          renderItem={({ item }) => <SliderItem
            data={item}
          />}
        />
      </ScrollView>

    </Container>
  );
}

export default Home;
