import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, Button } from 'react-native';
import styles from './styles/styles';

function PortfolioScreen() {

    const handleLink1Press = () => {
        Linking.openURL('https://github.com/SidneyRodrigo')};

    const handleLink2Press = () => {
        Linking.openURL('https://www.linkedin.com/in/sidney-silvestre-824582251/');    
    };

    return(
        <View style={styles.container}>

        <Button
            title="Visite meu perfil do GitHub"
            onPress={handleLink1Press}            
        />
        
        <Text></Text>

        <View style = {styles.verticalSpace}></View>

        <Button
            title="Visite meu perfil do LinkedIn"
            onPress={handleLink2Press}            
        />
        
        <Text></Text>
      </View>
    );
}

export default PortfolioScreen;