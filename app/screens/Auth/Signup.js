import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import EmailIcon from '../../assets/icons/emailIcon'
import PassIcon from '../../assets/icons/passIcon'
import EyeSlash from '../../assets/icons/eyeSlash'
import UserIcon from '../../assets/icons/userIcon'
import CheckedIC from '../../assets/icons/checked'
import UncheckedIC from '../../assets/icons/Unchecked'
import DoneIc from '../../assets/icons/DoneIc'
import Label from '../../components/Label'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/Modal'
export default function Signup({navigation}) {
    const [isChecked, setIsChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const _renderTerms = () => <View style={styles.termsWrap}>
        <Label text={"I agree to the medidoc "} style={styles.termText} />
        <Label text={"Terms of Service "} style={{ ...styles.termText, color: appColors.primary }} />
        <Label text={"and "} style={styles.termText} />
        <Label text={"Privacy Policy"} style={{ ...styles.termText, color: appColors.primary }} />
    </View>

    const _renderCheckBox = () => <Pressable onPress={() => setIsChecked(prev => !prev)}>
        {isChecked ? <CheckedIC /> : <UncheckedIC />}
    </Pressable>

    const _renderSignup = () => <View style={styles.signup}>
        <Label text={"Already have an account? "} style={{color:"#717784"}}/>
        <Label text={"Login"} onPress={() => navigation.navigate("Login")} style={{ color: appColors.primary }} />
    </View>

    return (
        <Container showHeader title={"Sign Up"} style={{ paddingTop: 50 }}>
            <CustomInput
                placeholder={"Enter your name"}
                IconLeft={<UserIcon />}
                keyboardType={"email-address"}
            />
            <CustomInput
                placeholder={"Enter your email"}
                IconLeft={<EmailIcon />}
            />
            <CustomInput
                placeholder={"Enter your password"}
                IconLeft={<PassIcon />}
                IconRight={<EyeSlash />}
                secureTextEntry
            />
            <View style={styles.wrap}>
                {_renderCheckBox()}
                {_renderTerms()}
            </View>
            <CustomButton label={"Sign Up"} style={styles.btn} onPress={()=>setModalVisible(true)}/>
            {_renderSignup()}
            <CustomModal isVisible={modalVisible} wraperStyle={styles.modal}>
              <View style={{alignSelf:"center",}}>
              <DoneIc/>
              </View>
              <Label text={"Success"} weight={"bold"} style={{fontSize:20,textAlign:"center"}}/>
              <Label text={"Your account has been successfully registered"} style={{fontSize:16,textAlign:"center", color:appColors.gray,marginTop:20}}/>
            <CustomButton label={"Login"} style={styles.btn} onPress={()=>{
                setModalVisible(false)
                navigation.navigate("Login")
                }}/>
                </CustomModal>
        </Container>
    )
}

const styles = StyleSheet.create({
    termsWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 9,

    },
    termText: {
        color: appColors.black2,
        fontSize: 14,
    },
    wrap: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 15
    },
    signup: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: scale(10),
        alignItems: "center"
    },
    btn:{
        marginTop:scale(25),
        marginBottom:scale(15)
    },
    modal:{
        // alignItems:"center"
    }
})