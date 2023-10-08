import React from 'react';
import {Text, View} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Main({navigation}: {navigation: any}) {
  return (
    <View className="relative flex h-full items-center justify-center">
      <Text className="text-2xl">This is the Main Screen</Text>
      <MyButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
