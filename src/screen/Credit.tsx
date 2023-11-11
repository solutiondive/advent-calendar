import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '~/components/common/Layout';

export default function Credit({navigation}: {navigation: any}) {
  return (
    <View className="relative flex h-full items-center justify-center">
      <View className="h-1/2 w-full">
        <Image
          className="h-full w-full"
          source={require('@asset/images/you-and-me.jpg')}
        />
        <Text className="py-16 text-center text-2xl">Thank you</Text>
      </View>
      <View className="mt-auto flex h-full w-full flex-col items-center justify-end">
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}
