import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function MarcacaoClima() {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        // Obtém a data atual
        const date = new Date();
        
        // Formata a data como uma string legível
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
        // Define a data formatada no estado
        setCurrentDate(formattedDate);
      }, []);
    return (
        <View style={styles.clima} >
            <View>
                <Text style={styles.cidade}>Recife, PE</Text>
                <Text style={{marginBottom: 25}}>{currentDate}</Text>
                
                <Text>2% de chance de chuva</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/SunDim.png')}/>
                <Text style={{fontWeight: '900'}}>22ºC</Text>
                <Text>23% umidade</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clima: {
        backgroundColor: '#C8DAF4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        padding: 10,
        borderRadius: 15,
    },
    cidade: {
        fontWeight: 'bold',
    }
})