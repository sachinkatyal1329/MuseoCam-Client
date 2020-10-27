import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/constants/styles/style'
import Cam from './src/components/Camera/Camera'
import Carousel from './src/components/carousel/Carousel'
// import Car from './src/components/carousel/Carousel'

export default function App() {
  const images = [
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg',
      },
    },
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg',
      },
    },
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg',
      },
    },
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg',
      },
    },
    
  ];

  return (
    <View >
      <Carousel images={images} />
    </View>
  );
}
