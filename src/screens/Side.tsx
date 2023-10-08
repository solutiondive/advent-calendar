import React from 'react';
import {View, Text} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Side({navigation}: {navigation: any}) {
  return (
    <View className="relative h-full flex justify-center items-center ">
      <Text className="text-2xl">This is the Side Screen</Text>
      <MyButton
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}
