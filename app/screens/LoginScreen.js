import React, { Component, useState } from 'react'
import { 
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native'
import { loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

export default function LoginScreen() {
    const [hidePassword, setHidePassword] = useState(false)

    return(
        <View style={[loginStyles.container]}>
            <StatusBar backgroundColor = {color.BLACK} translucent = {true} />            
            <View style={loginStyles.logo}>
                <Image
                    source = {require('@recursos/images/logo-brainapps.png')}
                    style = {{height: 150, width: 150, marginBottom: 50}}
                />
            </View>
            <MyTextInput
                keyboardType = 'email-address'
                placeholder = 'Email'
                image = 'user'
            />
            <MyTextInput
                keyboardType = {null}
                placeholder = 'Contraseña'
                image = 'lock'
                bolGone = {true}
                secureTextEntry = {!hidePassword}
                onPress = {() => setHidePassword(!hidePassword)}
            />
            <View style = {loginStyles.btnIniciarSesion}>
                <TouchableOpacity>
                    <Text style = {[loginStyles.btntxt, {color: color.WHITE}]}> Iniciar sesión </Text>
                </TouchableOpacity>
            </View>
            <View style = {loginStyles.btnRegistrarse}>
                <TouchableOpacity>
                    <Text style = {[loginStyles.btntxt, {color: color.BLACK}]}> Registrarse </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style = {[loginStyles.txtTransparent, {textDecorationLine: "underline"}]}> Olvidé mi contraseña </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}