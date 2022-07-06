import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { appColors } from '../../utils/appColors'

export default function OTPInput({}) {
  return (
    <View>
     <OTPInputView
    style={{width: '80%', height:200,alignSelf:"center"}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 64,
      height: 64,
      borderRadius:16,
      backgroundColor:appColors.lightGray,
      color:appColors.black,
      fontSize:24,
      fontFamily:"Inter-Bold",
      borderWidth: 0,
      
    },
  
    underlineStyleHighLighted: {
      borderColor: appColors.primary,
      borderWidth: 1,
      backgroundColor:appColors.white
    },
  });