import React from 'react';
import {Text, Pressable} from 'react-native';
export default function DayNote({day}: {day: number}) {
  return (
    <Pressable
      className="m-1 h-12 w-10 border-2 border-black"
      onPress={() => {}}>
      <Text className="text-center">{day}</Text>
    </Pressable>
  );
}
