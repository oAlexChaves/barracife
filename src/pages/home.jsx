import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarcacaoClima from '../components/marcacao-clima';
import MarcacaoSolo from '../components/marcacao-solo';
import Contatos from '../components/Contatos';
import Abrigos from '../components/Abrigos';

export default function Home() {
    return (
        <View>
            <MarcacaoClima style={{ marginTop: 50, alignSelf:'center'}} />
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
    ligueagora: {
      paddingLeft: 20,    
      alignSelf: 'flex-start',
      fontWeight:'bold',
      fontSize: 23,
    }
  });
  