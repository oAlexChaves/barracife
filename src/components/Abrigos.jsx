import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default function Abrigos() {
    return (
        <View style={styles.container}>
            <View style={styles.abrigos}>
                <Image source={require('../assets/Church.png')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Igreja Batista</Text>
                    <Text>R. Rio Xingu, 60 - Ibura de Baixo, Recife</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    abrigos: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Elevação da sombra para Android
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
