import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'
import CustomInput from '../../components/CustomInput'
import EmailIC from '../../assets/icons/emailRed.svg'
import CallIC from '../../assets/icons/callIc.svg'
import CustomButton from '../../components/CustomButton'

const tabs=["Email","Phone"]
export default function ForgotPassword({navigation}) {
    const [isSelected, setisSelected] = React.useState(0)
    const [isEmail, setIsEmail] = React.useState(true)
    const _customTab = () => <View style={styles.tab}>
       <Label  text={"Email"} weight={"medium"} 
                onPress={()=>{setIsEmail(true)}}
                style={{color:isEmail?appColors.primary:appColors.gray}}/>
                <Label  text={"Phone"} weight={"medium"} 
                onPress={()=>{setIsEmail(false)}}
                style={{color:!isEmail?appColors.primary:appColors.gray}}/>
    </View>
  return (
    <Container showHeader >
<Label text={"Forgot Your Password?"} weight={"bold"} style={{fontSize:24,marginTop:30}}/>
<Label text={"Enter your email or your phone number, we will send you confirmation code"}
 weight={""} style={{fontSize:16,color:appColors.gray}}/>
 {_customTab()}
 <View style={styles.body}>
    <CustomInput
    placeholder={`Enter your ${isSelected==1?"Phone": "Email"}`}
    IconLeft={!isEmail?<CallIC/>: <EmailIC/>}
    />
    <CustomButton onPress={()=>navigation.navigate("Verification")} label={"Reset Password"}/>
 </View>
    </Container>
  )
}

const styles = StyleSheet.create({
    body:{
        marginVertical:25
    },
    tab:{
        borderWidth:1,
        borderRadius:30,
        borderColor:appColors.border,
        backgroundColor:appColors.lightGray,
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:20
    },
    tabText:{
        color:appColors.gray,
        
    },
})