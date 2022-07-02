import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import Label from '../Label'
import ChevronLeft from '../../assets/icons/ChevronLeft.svg'
import { useNavigation } from '@react-navigation/native'
export default function CustomHeader({title,showBack,showMenu,}) {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Pressable 
      onPress={()=>navigation.pop(1)}
      style={styles.iconWrap}>
      <ChevronLeft/>
      </Pressable>
      <Label text={title} style={styles.title}/>
      <View style={styles.iconWrap}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:scale(20),
        height:50
    },
    title:{
        fontSize:18,
        fontWeight:"700",
        flex:1,
        textAlign:"center"
    },
    iconWrap:{
        height:50,
        width:50,
        // backgroundColor:"red",
        justifyContent:"center"
    }
})