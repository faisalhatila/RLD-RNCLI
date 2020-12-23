import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Bag1 from '../assets/images/Bag.png';
import Bag2 from '../assets/images/Bag1.png';
import Bag3 from '../assets/images/Bag2.png';
import City from '../assets/images/City.png';
import TopImage from '../assets/images/TopImage.png';
import {LightText} from '../components/UI/Text';
const StartUp = (props) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const animation = new Animated.Value(0);
  const startupSteps = [
    {
      id: 1,
      text:
        'Life is a succession of lessons which must be lived to be understood.',
      image: Bag3,
    },
    {
      id: 2,
      text:
        'You come into the world with nothing, and the purpose of your life is to make something out of nothing.',
      image: Bag2,
    },
    {
      id: 3,
      text: 'Life is what happens while you are busy making other plans.',
      image: Bag1,
    },
  ];
  const handleNextSlide = (id) => {
    setCurrentIndex(id);
    // startAnimation();
  };
  //   const startAnimation = () => {
  Animated.timing(animation, {
    toValue: {x: 0, y: 0},
    duration: 500,
    useNativeDriver: true,
  }).start();
  //   };
  //   Animated.spring(animation,{
  //       toValue:1,

  //   })
  useEffect(() => {
    console.log('Jumped');
    // startAnimation();
  }, [currentIndex]);
  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg'],
  });
  const animatedStyles = {
    transform: [{rotateY: rotateInterpolate}],
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          style={{
            maxWidth: '100%',
          }}
          source={TopImage}
        />
      </View>
      {startupSteps
        .filter((step) => step.id === currentIndex)
        .map((step, i) => {
          return (
            <View
              key={i}
              style={{
                // borderWidth: 1,
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  //   borderWidth: 1,
                  //   borderColor: '#800',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: '#000'}}>Comp 1</Text> */}
                <LightText style={{textAlign: 'center', maxWidth: '80%'}}>
                  {step.text}
                </LightText>
              </View>
              <View
                style={{
                  //   borderWidth: 1,
                  //   borderColor: '#800',
                  flex: 1,
                  zIndex: 1,
                }}>
                <View style={{flex: 1}}>
                  <ImageBackground
                    source={City}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                    }}
                    imageStyle={{resizeMode: 'cover'}}
                  />
                  <View
                    style={{
                      flex: 1,
                      //   borderWidth: 1,
                      //   width: 200,
                      alignItems: 'center',
                    }}>
                    <Animated.View style={[animatedStyles]}>
                      {/* <ImageBackground
                        source={step.image}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                        }}
                        imageStyle={{resizeMode: 'contain'}}
                      /> */}
                      <Image
                        style={{
                          width: 235,
                          height: 205,
                          zIndex: 10,
                          //   transform: [{rotateY: '70deg'}],
                        }}
                        source={step.image}
                      />
                    </Animated.View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  //   borderWidth: 1,
                  //   borderColor: '#800',
                  backgroundColor: '#FFD700',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  paddingBottom: 10,
                }}>
                {[...Array(3)].map((i, j) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        handleNextSlide(j + 1);
                      }}
                      key={j}>
                      <View
                        key={j}
                        style={{
                          height: 12,
                          width: 12,
                          borderWidth: 1,
                          borderColor:
                            j + 1 < currentIndex
                              ? '#fff'
                              : j + 1 > currentIndex
                              ? '#fff'
                              : '#fff',
                          backgroundColor:
                            j + 1 < currentIndex
                              ? '#fff'
                              : j + 1 === currentIndex
                              ? '#FFF'
                              : j + 1 > currentIndex
                              ? '#FFD700'
                              : '#FFD700',
                          borderRadius: 6,
                          marginHorizontal: 4,
                        }}></View>
                    </TouchableOpacity>
                  );
                })}
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Login');
                  }}>
                  <View
                    style={{
                      height: 12,
                      width: 12,
                      borderWidth: 1,
                      borderColor: '#fff',
                      backgroundColor: '#FFD700',
                      borderRadius: 6,
                      marginHorizontal: 4,
                    }}></View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
    </View>
  );
};
export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};
export default StartUp;
