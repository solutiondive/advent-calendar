import React from 'react';
import {Text, View, BackHandler} from 'react-native';
import HomeButton from '~/components/HomeButton';

const homeButtons = [
  {title: 'Go to Main', onPress: 'Main'},
  {title: 'Go to Credit', onPress: 'Credit'},
];

export default function Home({navigation}: {navigation: any}) {
  return (
    <View className="flex h-full flex-col items-center justify-between">
      <Text className="text-2xl">This is the Home Screen</Text>
      <View className="h-1/3 w-full items-center justify-between gap-4 pb-16">
        {homeButtons.map((button, index) => (
          <HomeButton
            key={index}
            title={button.title}
            onPress={() => navigation.navigate(button.onPress)}
          />
        ))}
        <HomeButton title="Exit" onPress={() => BackHandler.exitApp()} />
      </View>
    </View>
  );
}
