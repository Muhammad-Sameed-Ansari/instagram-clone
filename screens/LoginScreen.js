import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { icons } from '../constants'
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = () => (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    source={icons.instagram_logo}
                    style={{ width: 100, height: 100}}
                />
            </View>
            <LoginForm />
        </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})


export default LoginScreen