/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {BoldtText, LightText} from '../components/UI/Text';
import LoginCoverImage from '../assets/images/LoginCoverImage.png';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Logo from '../assets/images/Logo.png';
import Facebook from '../assets/images/Facebook.png';
import Google from '../assets/images/Google.png';
import AuthInput from '../components/UI/AuthInput';

const LoginScreen = (props) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <>
      {isLoginModalOpen && (
        <Modal animationType="slide">
          <View style={{flex: 1}}>
            <LinearGradient
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#000', '#C99230', '#C99230', '#C99230']}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={Logo} />
              </View>
              <View style={{flex: 2}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    marginHorizontal: 15,
                    marginVertical: 25,
                    borderRadius: 20,
                    overflow: 'hidden',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    justifyContent: 'space-around',
                  }}>
                  <View style={{flex: 2, justifyContent: 'flex-end'}}>
                    <View style={{marginBottom: 10}}>
                      <BoldtText
                        style={{
                          textAlign: 'center',
                          fontFamily: 'serif',
                          fontSize: 25,
                          color: '#C99230',
                        }}>
                        Welcome
                      </BoldtText>
                    </View>
                    <View>
                      <LightText
                        style={{
                          textAlign: 'center',
                          color: '#000',
                        }}>
                        Sign up to get started and experience great shopping
                        deals
                      </LightText>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      // borderEndWidth: 1,
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <AuthInput placeholder="Username / Email" />
                    </View>
                    <View>
                      <AuthInput placeholder="Password" />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <View
                      style={{
                        marginVertical: 10,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}>
                      <TouchableOpacity
                        // onPress={() => setIsLoginModalOpen(false)}
                        onPress={() => {
                          props.navigation.navigate('Welcome');
                          setIsLoginModalOpen(false);
                        }}>
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
                            <LightText style={{color: '#fff'}}>
                              Sign In
                            </LightText>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <View>
                    <LightText
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 17,
                      }}>
                      -OR-
                    </LightText>
                  </View>
                  <View
                    style={{
                      width: '80%',
                    }}>
                    <View>
                      <TouchableOpacity>
                        <View
                          style={{
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            borderRadius: 20,
                          }}>
                          <View>
                            <Image source={Facebook} />
                          </View>
                          <View style={{flex: 1}}>
                            <LightText style={{textAlign: 'center'}}>
                              Sign In With Facebook
                            </LightText>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 10}}>
                      <TouchableOpacity>
                        <View
                          style={{
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            borderRadius: 20,
                          }}>
                          <View>
                            <Image source={Google} />
                          </View>
                          <View style={{flex: 1}}>
                            <LightText style={{textAlign: 'center'}}>
                              Sign In With Google
                            </LightText>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </Modal>
      )}
      {!isLoginModalOpen && (
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              borderColor: '#800',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LightText style={{fontSize: 18}}>Welcome To</LightText>
            <BoldtText
              style={{fontSize: 22, fontFamily: 'serif', color: '#C99230'}}>
              Red Label District
            </BoldtText>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={LoginCoverImage}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
                imageStyle={{resizeMode: 'contain'}}
              />
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                marginHorizontal: 15,
                marginVertical: 20,
              }}>
              <View
                style={{
                  marginVertical: 10,
                  borderRadius: 20,
                  overflow: 'hidden',
                }}>
                <TouchableNativeFeedback
                  onPress={() => setIsLoginModalOpen(true)}>
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
                      <LightText style={{color: '#fff'}}>Login</LightText>
                    </View>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View>
                <TouchableNativeFeedback>
                  <View
                    style={{
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <LightText style={{color: '#000', fontFamily: 'serif'}}>
                      Signup
                    </LightText>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

export default LoginScreen;
// export default App;
