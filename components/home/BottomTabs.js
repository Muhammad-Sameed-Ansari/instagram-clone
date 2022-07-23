import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

import { icons } from '../../constants'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: icons.home_active,
        inactive: icons.home_inactive
    },
    {
        name: 'Search',
        active: icons.search_active_icon,
        inactive: icons.search_inactive_icon
    },
    {
        name: 'Reels',
        active: icons.reels_active_icon,
        inactive: icons.reels_inactive_icon
    },
    {
        name: 'Shop',
        active: icons.shop_active_icon,
        inactive: icons.shop_inactive_icon
    },
    {
        name: 'Profile',
        active: icons.home_active,
        inactive: icons.home_inactive
    }
]

const BottomTabs = ({ tabIcons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical'/>
            <View style={styles.container}>
                {tabIcons.map((icon, index) => (
                    <Icon key={index} icon={icon} activeTab={activeTab} setActiveTab={setActiveTab}/>
                ))}
            </View>
        </View>
    )
}

const Icon = ({ icon, activeTab, setActiveTab}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={ activeTab === icon.name ? icon.active : icon.inactive } style={styles.icon} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    wrapper: {

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default BottomTabs