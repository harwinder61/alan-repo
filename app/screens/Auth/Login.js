import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import EmailIcon from '../../assets/icons/emailIcon'
import PassIcon from '../../assets/icons/passIcon'
import EyeSlash from '../../assets/icons/eyeSlash'
import Label from '../../components/Label'
import CustomButton from '../../components/CustomButton'
import { appColors } from '../../utils/appColors'
import { scale } from 'react-native-size-matters'
import SocialButton from '../../components/CustomButton/SocialButton'
import CustomModal from '../../components/Modal'
import DoneIc from '../../assets/icons/DoneIc'

export default function Login({navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const _renderSignup = () =><View style={styles.signup}>
      <Label text={"Don’t have an account? "}/>
      <Label text={"Sign Up"} onPress={()=>navigation.navigate("Signup")} style={{color:appColors.primary}}/>
  </View>
const _renderOR = () =><View style={styles.signup}>
<View style={styles.line}/>
<Label text={"OR"} style={{color:appColors.gray,marginHorizontal:15}}/>
<View style={styles.line}/>
</View>
  return (
    <Container showHeader title={"Login"} style={{paddingTop:50}}>
      <CustomInput 
        placeholder={"Enter your email"}
        IconLeft={<EmailIcon />}
        keyboardType={"email-address"}
      />
      <CustomInput
        placeholder={"Enter your password"}
        IconLeft={<PassIcon />}
        secureTextEntry
      />
      <Label onPress={()=>navigation.navigate("ForgotPassword")} text={"Forgot Password?"} weight={"medium"} style={styles.forgot}/>
      <CustomButton label={"Login"} onPress={()=>setModalVisible(true)}/>
      {_renderSignup()}
      {_renderOR()}
      <View style={styles.socialView}>
        <SocialButton provider={"Google"}/>
        {Platform.OS==="ios"&& <SocialButton provider={"Apple"}/>}
        <SocialButton provider={"Facebook"}/>
      </View>
      <CustomModal isVisible={modalVisible} wraperStyle={styles.modal}>
              <View style={{alignSelf:"center",}}>
              <DoneIc/>
              </View>
              <Label text={"Yeay! Welcome Back"} weight={"bold"} style={{fontSize:20,textAlign:"center"}}/>
              <Label text={"Once again you login successfully into app"} style={{fontSize:16,textAlign:"center", color:appColors.gray,marginTop:20}}/>
            <CustomButton label={"Go to home"} style={styles.btn} onPress={()=>setModalVisible(false)}/>
                </CustomModal>
    </Container>
  )
}

const styles = StyleSheet.create({
  forgot:{
    textAlign:"right",
    color:appColors.primary,
    marginBottom:20,
    marginTop:10
  },
  signup:{
    flexDirection:"row",
    justifyContent:"center",
    marginVertical:scale(10),
    alignItems:"center"
  },
  line:{
    height:1,
    backgroundColor:appColors.border,
    flex:1
  },
  btn:{
    marginTop:scale(25),
    marginBottom:scale(15)
},
})