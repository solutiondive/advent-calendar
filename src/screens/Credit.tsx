import React from 'react';
import {View, Text, Image} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Credit({navigation}: {navigation: any}) {
  return (
    <View className="relative flex h-full items-center justify-center">
      <Image
        className="h-1/2 w-full"
        source={require('@assets/you-and-me.jpg')}
      />
      <Text className="text-2xl">Thank you</Text>
      <MyButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
