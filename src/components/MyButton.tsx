import React from 'react';
import {Text, Pressable} from 'react-native';

export default function MyButton({
  title,
  onPress,
}: {
  title: string;
  onPress: any;
}) {
  return (
    <Pressable
      className="absolute bottom-0 flex items-center justify-center bg-blue-500 w-full h-8 "
      onPress={onPress}>
      <Text className="text-white">{title}</Text>
    </Pressable>
  );
}
