import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'
import CustomInput from '../../components/CustomInput'
import EmailIC from '../../assets/icons/passIcon.svg'
import CustomButton from '../../components/CustomButton'
import { scale } from 'react-native-size-matters'
import OTPInput from '../../components/CustomInput/OTPInput'

export default function Verification({navigation}) {
    const _renderSignup = () =><View style={styles.signup}>
    <Label text={"Didn’t receive the code? "}/>
    <Label text={"Resend"} onPress={()=>{}} style={{color:appColors.primary}}/>
</View>
  return (
    <Container showHeader >
<Label text={"Enter Verification Code"} weight={"bold"} style={{fontSize:24,marginTop:30}}/>
<Label text={"Enter code that we have sent to your number 08528188*** "}
 weight={""} style={{fontSize:16,color:appColors.gray}}/>
 <View style={styles.body}>
    <OTPInput/>
    <CustomButton onPress={()=>navigation.navigate("CreatePassword")} label={"Verify"}/>
    {_renderSignup()}
 </View>
    </Container>
  )
}

const styles = StyleSheet.create({
    body:{
        marginVertical:25
    },
    signup:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:scale(10),
        alignItems:"center"
      },
})