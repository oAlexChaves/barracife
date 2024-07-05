import React from 'react';
import { Button, Text, Image, View } from 'react-native';

export default function Abrigos() {
    return(
        <View>
            <Text>Abrigos próximos:</Text>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('../assets/Church.png')} />
                <View>
                    <Text>Igreja Batista</Text>
                    <Text>R. Rio Xingu, 60 - Ibura de Baixo, Recife</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('../assets/school.png')}/>
                <View>
                    <Text>Escola Cecília Meireles</Text>
                    <Text>R. Rio Douro, 72 - Ibura, Recife - PE</Text>
                </View>
            </View>

        </View>
    )
}