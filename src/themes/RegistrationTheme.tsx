import { StyleSheet } from 'react-native';

export const registrationStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        padding: 30,
        backgroundColor: '#027373'

    },
    inputContainer: {
        marginBottom: 20,

    },
    input: {
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#F2E7DC'
    },
    pickerContainer: {
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#F2E7DC',
        bottom: 20,
        alignContent: 'center'
    },
    picker: {
        height: 70,
        width: '100%',
        bottom: 70,
        fontSize: 20,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },
    button: {
        backgroundColor: '#F2E7DC',
        padding: 12,
        borderRadius: 10,
        marginBottom: 30,
        borderWidth: 2,
    },
    textButton:{
        color: '#0D0D0D'
    }
});