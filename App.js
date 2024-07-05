import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarcacaoClima from './src/components/marcacao-clima';
import MarcacaoSolo from './src/components/marcacao-solo';
import Contatos from './src/components/Contatos';
import Abrigos from './src/components/Abrigos';
import Home from './src/pages/home';
import Bottommenu from './src/components/bottommenu';

export default function App() {
  return (
    <View style={styles.container}>
      <MarcacaoClima style={{ marginTop: 50, alignSelf: 'center' }} />
      <MarcacaoSolo />
      <Text style={styles.ligueagora}>Ligue agora</Text>
      <Contatos />
      <Text style={styles.ligueagora}>Abrigos proximos</Text>
      <Abrigos />
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
  Home: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ligueagora: {
    paddingLeft: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 23,
  }
});
