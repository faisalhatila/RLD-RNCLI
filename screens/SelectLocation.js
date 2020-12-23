import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import {BoldtText, LightText} from '../components/UI/Text';
// import SelectLocationCover from '../assets/images/SelectLocationCover.png';
import SelectLocationCover from '../assets/images/SelectLocationCover2.png';
import Check from '../assets/images/Check.png';
import LinearGradient from 'react-native-linear-gradient';
const SelectLocation = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'flex-end'}}>
        <ImageBackground
          source={SelectLocationCover}
          style={{width: '100%', height: '90%'}}
          imageStyle={{
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flex: 5, justifyContent: 'center'}}>
        <View style={{justifyContent: 'center'}}>
          <View>
            <View style={{alignItems: 'center'}}>
              <LightText style={{fontSize: 19, fontFamily: 'serif'}}>
                TURN ON YOUR LOCATION
              </LightText>
            </View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginBottom: 20,
              }}>
              <View style={{marginTop: 10}}>
                <LightText
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'serif',
                  }}>
                  To continues, let your device turn on location, which uses
                  Google’s location service
                </LightText>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 2, marginHorizontal: 20}}>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#000', '#C99230', '#C99230']}>
              <View
                style={{
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <LightText
                  style={{color: '#fff', fontSize: 17, fontFamily: 'serif'}}>
                  Yes, Turn It On
                </LightText>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <TouchableOpacity>
            {/* <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#000', '#C99230', '#C99230']}> */}
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <LightText
                style={{color: '#000', fontSize: 17, fontFamily: 'serif'}}>
                Cancel
              </LightText>
            </View>
            {/* </LinearGradient> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

export default SelectLocation;
