import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import LOGO from '../../assets/img/epamLogo.png';

const EPAMPage = () => (
  <View style={styles.mainWrapper}>
    <View style={styles.header}>
      <Image source={LOGO} style={styles.logoImage} resizeMode="contain" />
    </View>
    <Text style={styles.label}>ABOUT COMPANY:</Text>
    <Text style={styles.description}>
      EPAM’s global teams serve customers in over 25 countries across North
      America, Europe, Asia and Australia. EPAM is a recognized market leader in
      multiple categories among top global independent research agencies and was
      one of only four technology companies to appear on Forbes 25 Fastest
      Growing Public Tech Companies list every year of publication since 2013.
    </Text>
  </View>
);

export default EPAMPage;
