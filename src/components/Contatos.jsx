import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Contatos() {
    const handlePress = () => {
        console.log('Botão pressionado!');
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handlePress}>
                <LinearGradient
                    colors={['#8E3A0B', 'orange', '#FFA500']}
                    locations={[0, 0.25, 1]} // Define a posição das cores
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.Button}
                >
                    <Text style={[styles.buttonText, styles.boldText]}>Defesa Civil</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/telefone.png')} style={styles.icon} />
                        <Text style={styles.buttonText}>0800.081.3400</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.buttonchamado}>Abrir chamado</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <LinearGradient
                    colors={['#8E0B23', '#E23323']}
                    locations={[0, 0.25, 1]} // Define a posição das cores
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.Button}
                >
                    <Text style={[styles.buttonText, styles.boldText]}>Bombeiros</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/telefone.png')} style={styles.icon} />
                        <Text style={styles.buttonText}>190</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.buttonchamado}>Abrir chamado</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: 170,
        height: 80,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden', // Certifique-se de que o borderRadius funcione corretamente
        paddingLeft: 15,
        paddingRight: 5,
    },
    buttonText: {
        color: 'white',
    },
    buttonchamado: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent:'center'
    },
    boldText: {
        fontWeight: 'bold',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    image: {
        width: 50,
        height: 50,
        margin: 10,
    },
})
