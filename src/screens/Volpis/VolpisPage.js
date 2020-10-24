import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import LOGO from '../../assets/img/volpisLogo.png';

const VolpisPage = () => (
  <View style={styles.mainWrapper}>
    <View style={styles.header}>
      <Text style={styles.title}>Volpis</Text>
    </View>
    <Image source={LOGO} style={styles.logoImage} resizeMode="contain" />
    <Text style={styles.label}>ABOUT COMPANY:</Text>
    <Text style={styles.description}>
      Volpis is a company of ambitious professionals providing Web & Mobile App
      Design and Development services. As a team, we aspire to meet the needs
      and expectations of our clients and deliver the best result on time.
      Working at Volpis is not just a job — you will be a part of a passionate
      and motivated team. Our unique family spirit unites dedicated
      professionals with innovative ideas. We are a people-oriented company. At
      Volpis, the success of employees is what drives us — this is who we are
      today as a company. We strive to attract talents that is why we always
      working on enhancement of our benefits package.
    </Text>
  </View>
);

export default VolpisPage;
