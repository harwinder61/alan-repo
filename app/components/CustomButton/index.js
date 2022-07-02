import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function CustomButton({label,style,onPress,labelStyle,outlined}) {
    return (
        <TouchableRipple rippleColor={outlined?appColors.primary: appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,outlined&& styles.outlined, style]}> 
            <Label text={`${label}`} style={[styles.label,outlined&&styles.textOutlined, labelStyle]}/>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.primary,
        borderRadius:scale(30),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10)
    },
    label:{
        fontSize:scale(16),
        fontWeight:"600",
        color:appColors.white
    },
    outlined:{
        backgroundColor:appColors.white,
        borderWidth:1,
        borderColor:appColors.primary
    },
    textOutlined:{
        color:appColors.primary,
        fontWeight:"500",
    }
})
