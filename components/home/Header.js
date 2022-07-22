import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/header-logo.png')}    
                />
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image 
                        style={styles.icon}
                        source={require('../../assets/plus-icon.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        style={styles.icon}
                        source={require('../../assets/like-icon.png')}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>12</Text>
                    </View>
                    <Image 
                        style={styles.icon}
                        source={require('../../assets/facebook-messenger-icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 0
    },
    iconContainer: {
        flexDirection: 'row'
    },
    logo: {
        // backgroundColor: 'yellow',
        width: 100,
        height: 70,
        resizeMode: 'contain'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})

export default Header