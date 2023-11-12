import React from 'react';
import {Text, Pressable} from 'react-native';
import {useWidgetStore} from '~/shared/store';
export default function DayNote({day}: {day: number}) {
  const {setModal} = useWidgetStore();
  return (
    <Pressable
      className="m-1 h-12 w-10 border-2 border-black"
      onPress={() => setModal('sound')}>
      <Text className="text-center">{day}</Text>
    </Pressable>
  );
}
