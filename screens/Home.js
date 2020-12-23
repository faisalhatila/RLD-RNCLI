import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Input from '../components/UI/Input';
import {BoldtText, LightText} from '../components/UI/Text';
import SearchWhite from '../assets/images/SearchWhite.png';
import Inner from '../assets/images/Inner.png';
import Boxer from '../assets/images/Boxer.png';
import Bra from '../assets/images/Bra.png';
import Lingeries from '../assets/images/Lingeries.png';
import HomeCover1 from '../assets/images/HomeCover1.png';
import HomeCover2 from '../assets/images/HomeCover2.png';
import ProductCard from '../components/screens/ProductCard';

const Home = () => {
  const renderItem = ({item}) => {
    return <ProductCard />;
  };
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
  const products = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          margin: 15,
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
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
              marginVertical: 10,
            }}>
            {categories.map((category, i) => {
              return (
                <View
                  key={i}
                  style={{
                    elevation: 1,
                    overflow: 'hidden',
                    borderTopEndRadius: 5,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomEndRadius: 4.9,
                    //   flex: 0.5,
                    width: '22%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //   shadowColor: '#000',
                    //   shadowOffset: {
                    //     width: 0,
                    //     height: 1,
                    //   },
                    //   shadowOpacity: 0.22,
                    //   shadowRadius: 2.22,
                    //   borderWidth: 1,
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
                  <View style={{transform: [{translateY: -5}]}}>
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
              style={{width: '100%', height: 150}}
              imageStyle={{resizeMode: 'cover'}}
            />
          </View>
          <View
            style={{
              // borderWidth: 1,
              marginVertical: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/* <SafeAreaView> */}
            {/* <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
              //   extraData={selectedId}
            /> */}
            {/* </SafeAreaView> */}
            {[...Array(10)].map((card, i) => {
              return <ProductCard key={i} />;
            })}
          </View>
        </ScrollView>
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
