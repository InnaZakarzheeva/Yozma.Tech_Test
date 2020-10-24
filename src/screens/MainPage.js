import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import LOGO from '../assets/img/logo.jpg';
import INTRODUCTION from '../assets/img/introduction.jpg';
import {BACKGROUND_URL} from '../config/constants';

const MainPage = () => (
  <View style={styles.mainWrapper}>
    <View style={styles.header}>
      <Text style={styles.title}>Y</Text>
      <Image source={LOGO} style={styles.logoImage} resizeMode="contain" />
      <Text style={styles.title}>zma.Tech</Text>
    </View>
    <Image
      source={INTRODUCTION}
      style={styles.introductionImage}
      resizeMode="contain"
    />
    <ImageBackground
      source={{
        uri: BACKGROUND_URL,
      }}
      style={styles.backgroundImage}>
      <Text style={styles.label}>ABOUT COMPANY:</Text>
      <Text style={styles.description}>
        Yozma.Tech is a business-oriented outsourcing software development
        company. We offer a complete cycle of software development for
        outsourcing. We use cutting-edge technology and advanced development
        techniques to create a quality product for you. Yozma.Tech team strives
        to understand your business deeply in order to help you better integrate
        your ideas. We can find effective solutions for your company and bring
        it to a new level.
      </Text>
    </ImageBackground>
  </View>
);

export default MainPage;
