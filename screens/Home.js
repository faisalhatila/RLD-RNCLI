import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import Input from '../components/UI/Input';
import {BoldtText, LightText} from '../components/UI/Text';
import SearchWhite from '../assets/images/SearchWhite.png';
import Inner from '../assets/images/Inner.png';
import Boxer from '../assets/images/Boxer.png';
import Bra from '../assets/images/Bra.png';
import Lingeries from '../assets/images/Lingeries.png';
import HomeCover1 from '../assets/images/HomeCover1.png';
import HomeCover2 from '../assets/images/HomeCover2.png';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Inner White',
      image: Inner,
    },
    {
      id: 2,
      title: 'Lingeries',
      image: Lingeries,
    },
    {
      id: 3,
      title: 'Bras',
      image: Bra,
    },
    {
      id: 4,
      title: 'Boxers',
      image: Boxer,
    },
  ];
  return (
    <View style={{borderWidth: 1, flex: 1}}>
      <View
        style={{
          margin: 15,
          borderWidth: 1,
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 35,
            overflow: 'hidden',
            marginBottom: 10,
          }}>
          <View style={{flex: 9}}>
            <Input
              placeholder="Search"
              style={{paddingVertical: 5, paddingHorizontal: 15}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: '#000',
            }}>
            <Image source={SearchWhite} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            marginVertical: 10,
          }}>
          <BoldtText
            style={{fontSize: 22, fontFamily: 'serif', color: '#C99230'}}>
            Categories
          </BoldtText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            marginVertical: 10,
          }}>
          {categories.map((category, i) => {
            return (
              <View
                key={i}
                style={{
                  //   flex: 0.5,
                  width: '22%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 1,
                }}>
                <View
                  style={{
                    // backgroundColor: '#222',
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={category.image} />
                </View>
                <View>
                  <LightText style={{fontSize: 11, fontFamily: 'serif'}}>
                    {category.title}
                  </LightText>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{borderWidth: 1, marginVertical: 10}}>
          <ImageBackground
            source={HomeCover2}
            style={{width: '100%', height: 70}}
            imageStyle={{resizeMode: 'cover'}}
          />
        </View>
      </View>
    </View>
  );
};
export const screenOptions = (navData) => {
  //   return {
  //     headerShown: false,
  //   };
  return (
    <View>
      <LightText>Hi</LightText>
    </View>
  );
};

export default Home;
