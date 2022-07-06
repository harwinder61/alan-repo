import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'
import CustomInput from '../../components/CustomInput'
import EmailIC from '../../assets/icons/passIcon.svg'
import DoneIc from '../../assets/icons/DoneIc.svg'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/Modal/index'
import { scale } from 'react-native-size-matters'

export default function CreatePassword({navigation}) {
    const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container showHeader >
<Label text={"Create New Password"} weight={"bold"} style={{fontSize:24,marginTop:30}}/>
<Label text={"Create your new password to login"}
 weight={""} style={{fontSize:16,color:appColors.gray}}/>
 <View style={styles.body}>
    <CustomInput
    placeholder={"Create Password"}
    IconLeft={<EmailIC/>}
    secureTextEntry
    />
    <CustomInput
    placeholder={"Confirm password"}
    IconLeft={<EmailIC/>}
    secureTextEntry
    />
    <CustomButton onPress={()=>setModalVisible(true)} label={"Create Password"}/>
 </View>
 <CustomModal isVisible={modalVisible} wraperStyle={styles.modal}>
              <View style={{alignSelf:"center",}}>
              <DoneIc/>
              </View>
              <Label text={"Success"} weight={"bold"} style={{fontSize:20,textAlign:"center"}}/>
              <Label text={"You have successfully reset your password."} style={{fontSize:16,textAlign:"center", color:appColors.gray,marginTop:20}}/>
            <CustomButton label={"Login"} style={styles.btn} onPress={()=>{
                setModalVisible(false)
                navigation.navigate("Login")
                }}/>
                </CustomModal>
    </Container>
  )
}

const styles = StyleSheet.create({
    body:{
        marginVertical:25
    },
    btn:{
        marginTop:scale(25),
        marginBottom:scale(15)
    },
})