import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarcacaoClima from './src/components/marcacao-clima';
import MarcacaoSolo from './src/components/marcacao-solo';
import Contatos from './src/components/Contatos';
import Abrigos from './src/components/Abrigos';

export default function App() {
  return (
    <View style={styles.container}>
      <MarcacaoClima style={{marginTop: 50}}/>
      <MarcacaoSolo/>
      <View style={styles.contato_abrigos}>
        <Contatos/>
        <Abrigos/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  contato_abrigos: {
    justifyContent: 'center', 
    flexDirection: 'row', 
    width: 200, 
    padding: 20
  },
});
