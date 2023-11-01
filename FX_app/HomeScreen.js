import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './styles/styles';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Bem-vindo ao nosso app!!</Text>
        
        <Text>Escolha uma das opções abaixo.</Text>
        
        <View style = {styles.verticalSpace}></View>
        
        <Button 
            title="Ir para página de Currículo" 
            onPress={() => navigation.navigate('Curriculum')}/>
        
        <View style = {styles.verticalSpace}></View>
        
        <Button
            title="Ir para página de portifólio"
            onPress={() => navigation.navigate('Portfolio')}
        />
    </View>
  );
}

export default HomeScreen;