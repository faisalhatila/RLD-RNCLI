import React from 'react';
import {Image, ImageBackground, View, TouchableOpacity} from 'react-native';
import {BoldtText, LightText} from '../components/UI/Text';
import DeatilCover from '../assets/images/DeatilCover.png';
import Heart from '../assets/images/Heart.png';
import Left from '../assets/images/Left.png';
import LeftArrow from '../assets/images/LeftArrow.png';
import RightArrow from '../assets/images/RightArrow.png';
import LinearGradient from 'react-native-linear-gradient';
const ProductDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 5}}>
        {/* <Image
          source={DeatilCover}
          style={{maxWidth: '100%', maxHeight: '100%'}}
        /> */}
        <ImageBackground
          source={DeatilCover}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderBottomEndRadius: 50,
            borderBottomStartRadius: 50,
            overflow: 'hidden',
          }}
          imageStyle={{resizeMode: 'cover', alignSelf: 'flex-end'}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          // opacity: 0.5,
          position: 'absolute',
          flex: 3,
          width: '100%',
          height: '62.5%',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          overflow: 'hidden',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Image source={Left} style={{height: 13, width: 13}} />
          </View>
          <View
            style={{
              minHeight: 20,
              flex: 1,
              alignItems: 'center',
            }}>
            <BoldtText
              style={{
                textAlign: 'center',
                color: '#fff',
                position: 'absolute',
                fontSize: 20,
                fontFamily: 'serif',
              }}>
              Women
            </BoldtText>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={Heart} style={{height: 13, width: 13}} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 3,
            alignItems: 'center',
            marginHorizontal: 15,
          }}>
          <View>
            {['#C92636', '#fff', '#2748EE'].map((color, i) => {
              return (
                <View
                  style={{
                    borderColor: '#fff',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: color,
                    marginVertical: 10,
                    borderWidth: 2,
                  }}
                  key={i}
                />
              );
            })}
          </View>
          <View>
            {['S', 'M', 'L'].map((size, i) => {
              return (
                <View
                  style={{
                    borderColor: '#fff',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                  }}
                  key={i}>
                  <BoldtText
                    style={{color: '#fff', fontFamily: 'serif', fontSize: 20}}>
                    {size}
                  </BoldtText>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <LightText
              style={{color: '#fff', fontSize: 22, fontFamily: 'serif'}}>
              Women’s Sexy Lingerie
            </LightText>
          </View>
          <View>
            <BoldtText
              style={{color: '#fff', fontSize: 30, fontFamily: 'serif'}}>
              $15
            </BoldtText>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          marginHorizontal: 15,
          justifyContent: 'center',
        }}>
        <LightText style={{textAlign: 'center'}}>
          If you’re offered a seat on a rocket ship, don’t ask what seat! Just
          get on.
        </LightText>
      </View>
      <View style={{flex: 1.5, marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              marginVertical: 10,
              borderRadius: 25,
              overflow: 'hidden',
              flex: 1,
            }}>
            <TouchableOpacity
              // onPress={() => setIsLoginModalOpen(false)}
              onPress={() => {
                // props.navigation.navigate('Welcome');
                // setIsLoginModalOpen(false);
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#000', '#C99230']}>
                <View
                  style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <LightText style={{color: '#fff'}}>ADD TO CART</LightText>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 15}}>
              <TouchableOpacity>
                <Image source={LeftArrow} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={RightArrow} />
              </TouchableOpacity>
            </View>
          </View>
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

export default ProductDetails;
