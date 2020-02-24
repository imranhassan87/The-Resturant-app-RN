import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

const customHeaderButtton = props => {
    return <HeaderButton {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform === 'android' ? 'black' : 'white'}

    />

}

export default customHeaderButtton
