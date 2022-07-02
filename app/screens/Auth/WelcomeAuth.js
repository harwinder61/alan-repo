import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import { mgLogo } from '../../assets/images/images'
import CustomButton from '../../components/CustomButton'
import Label from '../../components/Label'
import { scale } from 'react-native-size-matters'

export default function WelcomeAuth({navigation}) {
    return (
        <Container>
            <View style={styles.body}>
                <View style={styles.logo}>
                    <Image source={mgLogo} />
                </View>
               <View style={styles.labelView}>
               <Label text={"Let’s get started!"} style={[styles.title,{color:"#101623",fontSize:scale(22),fontWeight:"700",marginBottom:15}]}/>
                <Label style={[styles.title,{marginBottom:scale(20),fontSize:16,color:"#717784",fontWeight:"400"}]} 
                text={`Login to enjoy instant\n confirmation of your bookings and available services`}/>
               </View>
            <View style={styles.buttons}>
            <CustomButton label={"Login"} onPress={()=>navigation.navigate("Login")}/>
                <CustomButton label={"Sign Up"} outlined onPress={()=>navigation.navigate("Signup")}/>
            </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: "center",
        marginBottom:scale(35)
    },
    labelView:{
        marginHorizontal:45
    },
    body: {
        flex: 1,
        justifyContent: "center"
    },
    title:{
        textAlign:"center"
    },
    buttons:{
        marginHorizontal:36
    }
})