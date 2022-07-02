import React from 'react'
import { ScrollView, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from '../../redux/ReduxWrapper'
import { appColors } from '../../utils/appColors'
import CustomHeader from '../CustomHeader'

function Container({
    children,
    isScrollable,
    showHeader, 
    style,
    title,
    showBack,
}) { 
    return (
        <SafeAreaView style={styles.container}>
            {showHeader&&<CustomHeader title={title} showBack={showBack}/>}
            {
                isScrollable? <ScrollView>
                    <View style={[styles.innerView,style ]}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={[styles.innerView, style ]}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.white
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    },
})
export default  ReduxWrapper(Container)