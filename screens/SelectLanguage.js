import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import {LightText} from '../components/UI/Text';
// import SelectLanguageCover from '../assets/images/SelectLanguageCover.png';
import SelectLanguageCover from '../assets/images/SelectLanguageCover2.png';
import Check from '../assets/images/Check.png';
import LinearGradient from 'react-native-linear-gradient';
const SelectLanguage = (props) => {
  const [languages, setLanguages] = useState([
    {
      id: 1,
      title: 'English',
    },
    {
      id: 2,
      title: 'French',
    },
    {
      id: 3,
      title: 'Chinese',
    },
    {
      id: 4,
      title: 'Japanese',
    },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'flex-end'}}>
        <ImageBackground
          source={SelectLanguageCover}
          style={{width: '100%', height: '90%'}}
          imageStyle={{
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flex: 5}}>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <LightText style={{fontSize: 19, fontFamily: 'serif'}}>
              PLEASE CHOOSE YOUR LANGUAGE
            </LightText>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
              marginBottom: 20,
            }}>
            {languages.map((language, i) => {
              return (
                <TouchableNativeFeedback
                  key={i}
                  onPress={() => {
                    setSelectedLanguage(language.id);
                  }}>
                  <View
                    style={{
                      marginVertical: 10,
                      //   paddingVertical: 8,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <LightText
                        style={{
                          color:
                            selectedLanguage === language.id
                              ? '#C99230'
                              : '#000',
                          fontFamily: 'serif',
                          fontSize: 18,
                        }}>
                        {language.title}
                      </LightText>
                    </View>

                    <View>
                      {selectedLanguage === language.id && (
                        <Image style={{width: 23, height: 23}} source={Check} />
                      )}
                    </View>
                  </View>
                </TouchableNativeFeedback>
              );
            })}
          </View>
        </View>
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <TouchableOpacity
            // onPress={() => setIsLoginModalOpen(false)}
            onPress={() => {
              props.navigation.navigate('SelectLocation'); // setIsLoginModalOpen(false);
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
                <LightText
                  style={{color: '#fff', fontSize: 17, fontFamily: 'serif'}}>
                  Done
                </LightText>
              </View>
            </LinearGradient>
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

export default SelectLanguage;
