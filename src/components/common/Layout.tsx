import React from 'react';
import {Text, Pressable} from 'react-native';

export function Button({title, onPress}: {title: string; onPress: any}) {
  return (
    <Pressable
      className="flex h-12  w-full items-center justify-center bg-blue-500 "
      onPress={onPress}>
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
}
