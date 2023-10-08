import React from 'react';
import {Pressable, Text} from 'react-native';

export default function HomeButton({
  title,
  onPress,
}: {
  title: string;
  onPress: any;
}) {
  return (
    <Pressable
      className=" flex h-12 w-3/4 items-center justify-center rounded-2xl bg-blue-500"
      onPress={onPress}>
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
}
