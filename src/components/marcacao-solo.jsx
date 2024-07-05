import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function MarcacaoSolo() {
    umidade = 10

    const determinarNivelRisco = (umidade) => {
        if (umidade < 20) {
            return 'Alto Risco';
        } else if (umidade >= 20 && umidade < 40) {
            return 'Baixo Risco';
        } else {
            return 'Risco Normal';
        }
    };
    return (
        <View style={styles.solo} >
            <View>
                <Text style={styles.local}>Cohab</Text>
                <Text style={styles.bairro}>Cohab, Recife</Text>
                <Text style={styles.cidade}>Estado:</Text>
                <Text style={styles.local}>{determinarNivelRisco(umidade)}</Text> 
                <Text>Umidade</Text>
                <Text style={styles.local}>{umidade}%</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <Image source={require('../assets/ThumbsUp.png')}/>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/drenagemboa.png')}/>
                    <Image source={require('../assets/vegetecaoboa.png')}/>
                </View>
                <Text>Histórico de Deslizamento</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    solo: {
        borderLeftWidth: 5,        // Largura da borda esquerda
        borderLeftColor: 'orange',   // Cor da borda esquerda
        padding: 20,               // Espaçamento interno
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    local: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    bairro: {
        marginBottom: 20,
    },
    
})