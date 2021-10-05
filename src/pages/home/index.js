import React from 'react';
import { View, Text } from 'react-native';
import { Container, SearchButton, SearchContainer, Input } from './styles';
import Header from '../../components/header';
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
    </Container>
  );
}

export default Home;
