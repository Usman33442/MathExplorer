import React from 'react';
import {Image, TouchableOpacity, Animated } from 'react-native';

const CustomButton = ({ picture, width, height, bgc, Width, Height, tintc, onPress,  }) => {
  return (
    <TouchableOpacity style={{ position: 'absolute', bottom: 0, marginBottom: 10 }} onPress={onPress}>
      <Animated.View
        style={{
            
          width: Width,
          height: Height,
          borderRadius: 30,
          backgroundColor: bgc,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      
        <Image
          source={picture}
          style={{ width: width, height: height, justifyContent: 'center',tintColor: tintc }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomButton;
