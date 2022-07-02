import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { appColors, shadow } from '../../utils/appColors'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from '../../redux/ReduxWrapper'

function CustomInput({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    InputStyle,
    IconRight,
    IconLeft,
    appState:{darkMode}
}) {
    return (
        <View style={[styles.container,]}>
            {IconLeft}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={[styles.input,InputStyle, ]}
            />
            {IconRight}
        </View>
    )
}
export default  ReduxWrapper(CustomInput)
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: scale(20),
        margin:scale(5),
        height: scale(45),
        alignItems: "center",
        backgroundColor: appColors.lightGray,
        borderRadius:scale(25),
        borderWidth:1,
        borderColor:appColors.border
    
    },
    input: {
        flex: 1,
        fontSize: scale(14),
        paddingHorizontal:15
    },
    light:{ 
        backgroundColor:appColors.white
    },
    dark:{ 
        backgroundColor:appColors.black
    },

    lightLabel:{ 
        color:appColors.black
    },
    darkLabel:{ 
        color:appColors.white
    }
})
