import { View, Text, TouchableOpacity } from 'react-native'; // Fixed import
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress} // Fixed case
      activeOpacity={0.7}
      className={`bg-orange-400 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    >
      <Text className={`font-u_bold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
