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
      className="absolute bottom-0 flex h-12  w-full items-center justify-center bg-blue-500 "
      onPress={onPress}>
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
}
