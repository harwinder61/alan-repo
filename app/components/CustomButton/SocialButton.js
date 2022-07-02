import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'
import GooogleIC from '../../assets/icons/googleIcon.svg'
import FBIC from '../../assets/icons/facebookIcon.svg'
import AppleIC from '../../assets/icons/appleIcon.svg'

export default function SocialButton({provider,style,onPress,labelStyle,outlined}) {
    return (
        <TouchableRipple rippleColor={appColors.gray} onPress={onPress} rippleDuration={800} style={[styles.container, style]}> 
            {
                provider==="Google"?<GooogleIC/>:provider==="Apple"?<AppleIC/>:<FBIC/>
            }
            <Label text={`Sign in with ${provider}`} style={[styles.label, labelStyle]}/>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        borderRadius:scale(30),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10),
        backgroundColor:appColors.white,
        borderWidth:1,
        borderColor:appColors.border,
        flexDirection:"row",
        paddingHorizontal:20
    },
    label:{
        fontSize:scale(16),
        fontWeight:"600",
        color:appColors.black,
        flex:1,
        textAlign:"center",marginRight:15
    },
})
