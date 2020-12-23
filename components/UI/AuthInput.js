import React from 'react';
import {TextInput, View} from 'react-native';

const AuthInput = (props) => {
  return (
    <View>
      <TextInput
        style={{
          borderBottomWidth: 1,
          paddingVertical: 0,
          borderBottomColor: 'red',
          paddingHorizontal: 0,
          fontFamily: 'serif',
          fontSize: 13,
        }}
        {...props}
      />
    </View>
  );
};

export default AuthInput;
