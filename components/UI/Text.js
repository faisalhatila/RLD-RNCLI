import React from 'react';
import {Text} from 'react-native';

export const LightText = (props) => {
  return (
    <Text style={{...props.style, fontWeight: 'normal'}}>{props.children}</Text>
  );
};
export const BoldtText = (props) => {
  return (
    <Text style={{...props.style, fontWeight: 'bold'}}>{props.children}</Text>
  );
};
