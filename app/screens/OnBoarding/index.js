import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { scale } from 'react-native-size-matters';
import Label from '../../components/Label';
import * as Animatable from 'react-native-animatable';
import { appColors, shadow } from '../../utils/appColors';
import Container from '../../components/Container';
import ArrowRight from '../../assets/icons/arrowRight.svg'
import { onboard1, onboard2, onboard3 } from '../../assets/images/images';
import LinearGradient from 'react-native-linear-gradient';
export default function Index({ navigation }) {
  const sliderRef = useRef()
  const slides = [
    {
      key: 'two',
      text: "Local experts in your community. Save time and money. ",
      image: onboard1,
      backgroundColor: '#febe29',

    },
    {
      key: 'three',
      text: "Find the right specialist for you in one place",
      image:
        onboard2,
      backgroundColor: '#22bcb5',

    },
    {
      key: 'one',
      text: "Book directly with your specialist. Instant booking confirmation. ",
      image: onboard3,
      backgroundColor: '#59b2ab',

    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Label 
        text="Skip" 
        onPress={_onDone}
        style={{textAlign:"right",color:appColors.gray}}/>
        <Animatable.View animation={'bounceIn'} style={{ alignItems: 'center', paddingVertical: scale(0) }}>
          <Image
            style={{}}
            source={item.image}
          />
        </Animatable.View>
        <LinearGradient colors={['rgba(245, 247, 255, 1)', 'rgba(245, 247, 255, 0)']} style={styles.card}>
          <Label weight={"bold"} text={item.text} style={{ fontSize: scale(18) }} bold />
        </LinearGradient>
      </View>
    );
  };
  const _onDone = () => {
    navigation?.navigate("WelcomeAuth")
  };
  const onNext = (activeIndex) => {
    if (activeIndex < slides.length - 1) {
      sliderRef?.current?.goToSlide(activeIndex + 1, true)
    }
    else {
      _onDone()
    }
  }
  const _renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>

        <View style={styles.paginationDots}>
          {slides.length > 1 &&
            slides.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.activeButton,
                  i === activeIndex
                    ? { backgroundColor: appColors.primary }
                    : { backgroundColor: appColors.lightPrimary },
                ]}
                onPress={() => sliderRef?.current?.goToSlide(i, true)}
              />
            ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => onNext(activeIndex)}>
            <ArrowRight />
          </TouchableOpacity>
        </View>

      </View>
    );
  };
  return (
    <Container>

      <AppIntroSlider
        ref={sliderRef}
        dotStyle={styles.buttonCircle}
        activeDotStyle={styles.activeButton}
        // renderPagination
        renderItem={_renderItem}
        renderPagination={_renderPagination}
        data={slides}
        onDone={_onDone}

      // skipLabel={"Slip"}
      />
      {/* <Label onPress={()=>  navigation?.navigate("Home")} text={"skip 2"} /> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: scale(12),
    height: scale(4),
    borderRadius: scale(3),
    backgroundColor: appColors.lightPrimary,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    paddingHorizontal: scale(20),
    paddingTop: 43,
    height: scale(226),
    borderRadius: scale(24)
  },
  activeButton: {
    width: scale(12),
    height: scale(4),
    borderRadius: scale(3),
    marginHorizontal: scale(2),
    backgroundColor: appColors.primary,
    ...shadow
  },
  slide: {
    flex: 1,
    justifyContent: "center",

    // backgroundColor:"red"
    //   paddingHorizontal:scale(20)
  },
  btn: {
    marginTop: scale(10),
    fontSize: scale(15),
  },

  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: scale(38),
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    // marginHorizontal: 24,
  },
  button: {
    backgroundColor: appColors.primary,
    height: scale(56),
    width: scale(56),
    borderRadius: scale(56 / 2),
    justifyContent: "center",
    alignItems: "center",
    ...shadow
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
