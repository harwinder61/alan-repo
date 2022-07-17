import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import { appColors } from '../../utils/appColors'
import AvatarImage from '../../components/AvatarImage'
import MenuIC from '../../assets/icons/menuIcon.svg'
import HeartbeatIC from '../../assets/icons/heartbearIC.svg'
import FireIC from '../../assets/icons/fireIC.svg'
import BarbellIC from '../../assets/icons/barbellIC.svg'
import ArrowRight from '../../assets/icons/arrowRight1.svg'
import HeartIC from '../../assets/icons/heartIC.svg'
import FileIC from '../../assets/icons/fileIC.svg'
import WalletIC from '../../assets/icons/walletIC.svg'
import CommentIC from '../../assets/icons/CommentIC.svg'
import InfoIC from '../../assets/icons/infoIC.svg'
import Label from '../../components/Label'
import TouchableRipple from 'react-native-touch-ripple'
const url = "https://media.istockphoto.com/photos/studio-portrait-of-a-12-year-old-girl-picture-id1085096448?k=20&m=1085096448&s=612x612&w=0&h=8Os53H4IadQXh4X9RoolxL_00gb5014OsfRDyQtFIAQ="
export default function Profile() {

    const DATA=[
        {
            label:"MY Saved",
            icon:<HeartIC/>
        },
        {
            label:"Appointments",
            icon:<FileIC/>
        },
        {
            label:"Payment Method",
            icon:<WalletIC/>
        },
        {
            label:"FAQs",
            icon:<CommentIC/>
        },
        {
            label:"Logout",
            icon:<InfoIC/>
        },
    ]
    const userDetail = () => <View style={styles.userDetail}>
        <View style={styles.item}>
            <HeartbeatIC />
            <Label text="Heart rate" style={styles.label} />
            <Label text="85bpm" weight={"medium"} style={styles.value} />
        </View>
        <View style={styles.divider} />
        <View style={styles.item}>
            <FireIC />
            <Label text="Heart rate" style={styles.label} />
            <Label text="85bpm" weight={"medium"} style={styles.value} />
        </View>
        <View style={styles.divider} />
        <View style={styles.item}>
            <BarbellIC />
            <Label text="Heart rate" style={styles.label} />
            <Label text="85bpm" weight={"medium"} style={styles.value} />
        </View>
    </View>
    const _menuItem = (val,key) => {
        return (
            <TouchableRipple rippleDuration={800} key={key} style={styles.menu}>
                
                <View style={styles.iconBG}>
                {val.icon}
                </View>
                <Label text={val.label} weight="bold" style={styles.itemLab}/>
                <ArrowRight />
            </TouchableRipple>
        )
    }
    return (
        <Container style={{ paddingHorizontal: 0, }}>

            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <MenuIC />
                </View>
                <View style={styles.profile}>
                    <AvatarImage source={{ uri: url }} size={80} style={styles.img} />
                    <Label text="Maria Murphy" weight={"medium"} style={styles.name} />
                    {userDetail()}
                </View>
                <View style={styles.body}>
                    {DATA.map((val,key)=>{
                        return _menuItem(val,key)
                    })}
                    
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    iconBG:{
        backgroundColor:"#E8F3F1",
        height:43,
        width:43,
        borderRadius:43/2,
        alignItems:"center",
        justifyContent:"center",
        marginRight:18
    },
    itemLab:{
        flex:1
    },
    menu: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:20,
        // marginTop:12,
        paddingVertical:12,
        borderBottomWidth:1,
        borderColor:"#E8F3F1"
    },
    body: {
        backgroundColor: appColors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        marginTop: 40,
        overflow:"hidden"
    },
    userDetail: {
        flexDirection: "row",
        paddingHorizontal: 50,
        marginTop: 20,
        justifyContent: "space-between",
    },
    wrapper: {
        flex: 1,
        backgroundColor: appColors.darkPrimary
    },
    img: {
        alignSelf: "center"
    },
    profile: {

    },
    header: {
        height: 50,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingHorizontal: 20
    },
    name: {
        color: appColors.white,
        fontSize: 18,
        alignSelf: "center",
        marginTop: 18
    },
    item: {
        alignItems: "center"
    },
    label: {
        fontSize: 10,
        color: "#FFA6A6"
    },
    value: {
        fontSize: 16,
        color: appColors.white
    },
    divider: {
        marginVertical: 7,
        backgroundColor: "#FFA6A6",
        width: 1
    }
})