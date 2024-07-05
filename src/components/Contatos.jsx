import React from 'react';
import { Button, Text, Image, View } from 'react-native';

export default function Contatos() {
    const handlePress = () => {
        // Função a ser executada quando o botão for pressionado
        console.log('Botão pressionado!');
        // Adicione aqui a lógica que você deseja executar ao pressionar o botão
    };
    return (
        <View style={{flexDirection: 'row'}}>
            <View>
                <Image source={require('../assets/bombeiros.png')} />
                <Image source={require('../assets/telefone.png')} onPress={handlePress} />
            </View>
            <View>
                <Image source={require('../assets/defesa-civil.png')} />
                <Image source={require('../assets/telefone.png')} onPress={handlePress} />
            </View>
        </View>
    )
}