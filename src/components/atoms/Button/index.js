import React, { useRef } from 'react'
import { Text, Animated, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({label, bgColor, textColor, onPress, isDisabled}) => {
    const buttonSizeAnim = useRef(new Animated.Value(90)).current

    const buttonClickHandler = () => {
        if(!isDisabled)
            Animated.sequence([
                Animated.timing(buttonSizeAnim, {
                    toValue: 80,
                    duration: 50,
                    useNativeDriver: false
                }),
                Animated.timing(buttonSizeAnim, {
                    toValue: 100,
                    duration: 80,
                    useNativeDriver: false
                }),
                Animated.timing(buttonSizeAnim, {
                    toValue: 90,
                    duration: 100,
                    useNativeDriver: false
                }),
            ]).start(
                ({finished}) =>
                    finished &&
                    onPress &&
                    onPress()
            )
    }

    return (
        <TouchableOpacity   style={styles.buttonContainer}
                            onPress={buttonClickHandler}
                            activeOpacity={1}>
            <Animated.View  style={{
                                ...styles.buttonStyle,
                                width: buttonSizeAnim.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['60%', '100%']
                                }),
                                height: buttonSizeAnim.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', '100%']
                                }),
                                backgroundColor: isDisabled ? 'hsla(0, 0%, 0%, 0.15)' : bgColor
                            }}>
                <Text   style={{color: textColor, fontFamily: 'Poppins-Medium'}}>{label}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
    },
})

export default Button