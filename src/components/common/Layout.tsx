import React from 'react';
import {Text, Pressable} from 'react-native';

export function Button({title, onPress}: {title: string; onPress: any}) {
  return (
    <Pressable
      className={
        'mb-4 flex h-12 w-4/5 items-center justify-center rounded-md bg-blue-500 '
      }
      onPress={onPress}>
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
}
