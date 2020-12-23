import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import {BoldtText, LightText} from '../components/UI/Text';
import WelcomeBackgroundImage from '../assets/images/Welcome.png';
import Home from '../assets/images/Home.png';
import Help from '../assets/images/Help.png';
import Search from '../assets/images/Search.png';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const Welcome = (props) => {
  return (
    <View>
      <View>
        <ImageBackground
          source={WelcomeBackgroundImage}
          style={{width: '100%', height: '100%', backgroundColor: '#800'}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <LightText
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'justify',
              fontFamily: 'serif',
            }}>
            Welcome to{' '}
            <BoldtText style={{fontSize: 22, color: '#C99230'}}>
              RedLabelDistrict
            </BoldtText>
            , an e-commerce app !
          </LightText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <LightText style={{color: '#fff', textAlign: 'justify'}}>
            There are also country specific classified online sites like
            usfreeads.com for United States. There are a number of agencies
            throughout the world that have made a business out of the classified
            advertising industry.
          </LightText>
        </View>
        <View style={{flex: 0.1}} />
        <View style={{flex: 3}}>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate('SelectLanguage');
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                //   justifyContent: 'space-around',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              <View style={{marginRight: 20}}>
                <Image source={Home} />
              </View>
              <View>
                <View>
                  <BoldtText
                    style={{
                      color: '#C99230',
                      fontSize: 20,
                      fontFamily: 'serif',
                    }}>
                    Go to the Home page
                  </BoldtText>
                </View>
                <View>
                  <LightText style={{fontSize: 11, fontFamily: 'serif'}}>
                    Start to explore your shopping paradise
                  </LightText>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'space-around',
              marginVertical: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <View style={{marginRight: 20}}>
              <Image source={Search} />
            </View>
            <View>
              <View>
                <BoldtText
                  style={{color: '#C99230', fontSize: 20, fontFamily: 'serif'}}>
                  Search your products
                </BoldtText>
              </View>
              <View>
                <LightText style={{fontSize: 11, fontFamily: 'serif'}}>
                  You can search what you need so quick
                </LightText>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'space-around',
              paddingVertical: 10,
              paddingHorizontal: 20,
              paddingHorizontal: 20,
            }}>
            <View style={{marginRight: 20}}>
              <Image source={Help} />
            </View>
            <View>
              <View>
                <BoldtText
                  style={{color: '#C99230', fontSize: 20, fontFamily: 'serif'}}>
                  You need the help ?
                </BoldtText>
              </View>
              <View>
                <LightText style={{fontSize: 11, fontFamily: 'serif'}}>
                  Support team can help you 24/7
                </LightText>
              </View>
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

export default Welcome;
