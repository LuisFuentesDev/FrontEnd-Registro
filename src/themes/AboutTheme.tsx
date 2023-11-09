import { StyleSheet } from "react-native";

export const aboutStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#027373'
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 16,
        borderWidth: 2,
      },
      text: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 16,
        color: '#F2E7DC'
      },
      button: {
        backgroundColor: '#F2E7DC',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
      },
      buttonText: {
        color: '#0D0D0D',
        fontSize: 20,
    },
});