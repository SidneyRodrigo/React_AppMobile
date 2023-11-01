import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles/styles';

function CurriculumScreen() {
  return (
    <View style={styles.container}>
      <Image source = {require('./assets/ft_perfil.png')} style = {[styles.image, styles.roundImage]}/>
      <View style = {styles.verticalSpace}></View>
      <Text>Sidney Silvestre</Text>
    </View>
  );
}

export default CurriculumScreen;