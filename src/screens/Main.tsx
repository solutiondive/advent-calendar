import React from 'react';
import {View, Text, Image} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Main({navigation}: {navigation: any}) {
  return (
    <View className="relative h-full flex justify-center items-center ">
      <Text className="text-2xl">This is the Main Screen</Text>
      <Image
        className="w-full h-1/2"
        source={require('@assets/you-and-me.jpg')}
      />
      <MyButton
        title="Go to Side"
        onPress={() => navigation.navigate('Side')}
      />
    </View>
  );
}
