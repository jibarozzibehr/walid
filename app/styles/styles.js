import { StyleSheet } from 'react-native'
import color from './colors'

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },

    btnIniciarSesion: {
        width: 280,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: color.SPOTI,
        borderRadius: 60
    },

    btnRegistrarse: {
        width: 280,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: color.WHITE,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: color.BLACK
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        /*fontFamily: 'Poppins-Bold',*/
        fontWeight: "bold",
    },

    txtTransparent: {
        color: color.BLACK,
        fontSize: 14,
        /*fontFamily: 'Poppins-Light',*/
    }
})

export { loginStyles, splashStyles }