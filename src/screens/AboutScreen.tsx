import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackParamNavigator } from '../navigator/NavigatorApp'
import { aboutStyles } from '../themes/AboutTheme';

interface Props extends NativeStackScreenProps<StackParamNavigator> { }

export const AboutScreen = ({ navigation }: Props) => {
  return (
    <View style={aboutStyles.container}>
      <Image source={require('../../src/image/aboutMe.jpeg')} style={aboutStyles.image} />
      <Text style={aboutStyles.text}>
        ¡Hola! Soy Luis, el creador de esta aplicación. Espero que la disfrutes al máximo.
      </Text>
      <TouchableOpacity style={aboutStyles.button}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={aboutStyles.buttonText}>Regresar al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};