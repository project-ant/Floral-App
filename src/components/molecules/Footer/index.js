import React from 'react'
import {StyleSheet, Text, View, TouchableOpasity} from 'react-native'
import {IconBack} from '../../../assets'
import { Gap } from '../../atoms'

const Header = ({title, onBack}) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpasity onPress={onBack} activeOpacity={0.7}>
                    <View style={styles.back}>
                        <IconBack />
                    </View>
                </TouchableOpasity>
            )}
            <Gap width={16} />
            <Text style={styles.Text}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingVertical: 593,
        backgroundColor: 'FFC700',
        flexDirection: 'row',
    },
    Text: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
    },
    back: {
        padding: 5,
    }
})