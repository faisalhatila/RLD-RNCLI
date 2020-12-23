import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {BoldtText, LightText} from '../UI/Text';
import DummyImage from '../../assets/images/DummyImage.jpg';
import Star from '../../assets/images/Star.png';
import BagGold from '../../assets/images/BagGold.png';
import BagBlack from '../../assets/images/BagBlack.png';
import BagWhite from '../../assets/images/BagWhite.png';
import HeartWhite from '../../assets/images/HeartWhite.png';
import HeartRed from '../../assets/images/HeartRed.png';
import BigWhiteHeart from '../../assets/images/BigWhiteHeart.png';
import BigRedHeart from '../../assets/images/BigRedHeart.png';
import BigBagGold from '../../assets/images/BigBagGold.png';

const ProductCard = (props) => {
  return (
    <View
      style={{
        width: '48%',
        elevation: 1,
        // borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
      }}>
      <View style={{}}>
        <ImageBackground
          source={DummyImage}
          style={{width: '100%', height: 200}}
          imageStyle={{resizeMode: 'cover'}}
        />
      </View>
      <View
        style={{
          //   backgroundColor: '#4f4f4f',
          backgroundColor: '#000',
          paddingHorizontal: 5,
          paddingVertical: 7,
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <BoldtText style={{color: '#fff', fontFamily: 'serif'}}>
              Women's Sexy Lingerie
            </BoldtText>
          </View>
          <View>
            <LightText style={{color: '#fff', fontFamily: 'serif'}}>
              $15
            </LightText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <View>
              <Image source={Star} />
            </View>
            <View style={{marginLeft: 5}}>
              <LightText
                style={{color: '#fff', fontFamily: 'serif', fontSize: 12}}>
                4.3
              </LightText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* <View> */}
            <View
              style={{
                width: 20,
                height: 20,
                marginLeft: 5,
                // backgroundColor: 'red',
              }}>
              <Image
                source={BigBagGold}
                style={{maxWidth: '100%', maxHeight: '100%'}}
              />
            </View>
            {/* </View> */}
            {/* <View style={{}}> */}
            <View
              style={{
                width: 20,
                height: 20,
                marginLeft: 5,
                // backgroundColor: 'red',
              }}>
              <Image
                source={BigRedHeart}
                style={{maxWidth: '100%', maxHeight: '100%'}}
              />
            </View>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
