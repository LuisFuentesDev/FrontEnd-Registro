import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackParamNavigator } from '../navigator/NavigatorApp';
import { homeStyles } from '../themes/HomeTheme';

interface Props extends NativeStackScreenProps<StackParamNavigator> {}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={homeStyles.container}>
      <TouchableOpacity
        style={homeStyles.button}
        onPress={() => navigation.navigate('RegistrationScreen')}
      >
        <Text style={homeStyles.buttonText}>Registro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyles.button}
        onPress={() => navigation.navigate('ResultsScreen')}
      >
        <Text style={homeStyles.buttonText}>Resultados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyles.button}
        onPress={() => navigation.navigate('AboutScreen')}
      >
        <Text style={homeStyles.buttonText}>Acerca de</Text>
      </TouchableOpacity>
    </View>
  );
};
