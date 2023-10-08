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
      className="flex items-center justify-center bg-red-500 h-8 rounded-sm"
      onPress={onPress}>
      <Text className="text-white">{title}</Text>
    </Pressable>
  );
}
