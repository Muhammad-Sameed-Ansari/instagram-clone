import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { icons } from '../../constants'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image source={icons.back_button_icon} style={{ width: 25, height: 25 }}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 27
    }
})

export default AddNewPost