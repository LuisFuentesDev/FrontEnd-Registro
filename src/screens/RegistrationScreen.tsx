import React, { useState } from 'react';
import { View, TextInput, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamNavigator } from '../navigator/NavigatorApp';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { registrationStyles } from '../themes/RegistrationTheme';

interface Props extends NativeStackScreenProps<StackParamNavigator> { }

export const RegistrationScreen = ({ navigation }: Props) => {
    const [nameEmployee, setName] = useState('');
    const [email, setEmail] = useState('');
    const [departament, setArea] = useState('');

    const handleSave = async () => {

        if (!nameEmployee.trim() || typeof nameEmployee !== 'string') {
            Alert.alert('Error', 'Por favor ingrese un nombre válido.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            Alert.alert('Error', 'Por favor ingrese un email válido.');
            return;
        }

        let departamentoId;
        switch (departament) {
            case 'Ventas':
                departamentoId = 1;
                break;
            case 'Recursos Humanos':
                departamentoId = 2;
                break;
            case 'Contabilidad':
                departamentoId = 3;
                break;
            default:
                departamentoId = 1;
        }

        try {
            const response = await axios.post('http://192.168.4.41:8080/api/employee', {
                email: email,
                nameEmployee: nameEmployee,
                departament: {
                    id: departamentoId,
                    departament: departament,
                },
            });

            if (response.status === 200) {
                Alert.alert('Registro exitoso', 'El registro se ha guardado con éxito.');

            } else {
                Alert.alert('Error', 'Ocurrió un error al intentar registrar.');
            }
        } catch {
            Alert.alert('Error', 'Ocurrió un error al intentar registrar. Por favor, inténtelo nuevamente.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={registrationStyles.container}>
                <View style={registrationStyles.inputContainer}>
                    <TextInput
                        style={registrationStyles.input}
                        value={nameEmployee}
                        onChangeText={(text) => setName(text)}
                        editable={true}
                        placeholder="Nombre Empleado"
                        autoFocus={true}
                        
                    />
                    <TextInput
                        style={[registrationStyles.input]}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        placeholder="Correo Electrónico"
                        
                        
                    />
                </View>

                <View style={registrationStyles.pickerContainer}>
                    <Picker

                        selectedValue={departament}
                        onValueChange={(itemValue) => setArea(itemValue.toString())}
                    >
                        <Picker.Item label="Ventas" value="Ventas" />
                        <Picker.Item label="Recursos Humanos" value="Recursos Humanos" />
                        <Picker.Item label="Contabilidad" value="Contabilidad" />
                    </Picker>
                </View>

                <View style={registrationStyles.buttonContainer}>
                    <TouchableOpacity style={registrationStyles.button} onPress={handleSave}>
                        <Text
                            style={registrationStyles.textButton}
                        >Guardar Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={registrationStyles.button} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text
                            style={registrationStyles.textButton}
                        >Regresar al Inicio</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};