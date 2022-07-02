import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from '../../redux/ReduxWrapper'
import { appColors } from '../../utils/appColors'

function Label({text,style,onPress,weight}) {
     const fontWeight=weight==="bold"?
     styles.bold
     :weight==="medium"
     ?styles.medium
     :weight==="light"
     ?styles.light
     :styles.regular
    return (
    <Text onPress={onPress} style={[styles.label,fontWeight,style, ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(14),
        color:appColors.black,
    },
    medium:{
        fontFamily:"Inter-Medium"
    },
    bold:{
        fontFamily:"Inter-Bold"
    },
    light:{
        fontFamily:"Inter-Light"
    },
    regular:{
        fontFamily:"Inter-Regular"
    },
})


export default  ReduxWrapper(Label)