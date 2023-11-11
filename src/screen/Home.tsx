import React from 'react';
import {Text, View, BackHandler} from 'react-native';
import {Button} from '~/components/common/Layout';

const homeButtons = [
  {title: 'Go to Main', onPress: 'Main'},
  {title: 'Go to Credit', onPress: 'Credit'},
  {title: 'Exit', onPress: () => BackHandler.exitApp()},
];

export default function Home({navigation}: {navigation: any}) {
  return (
    <View className="flex flex-col">
      <View className=" w-full">
        <Text className="text-2xl">This is the Home Screen</Text>
      </View>
      <View className="mt-auto flex h-full w-full flex-col justify-end">
        {homeButtons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            onPress={() => navigation.navigate(button.onPress)}
          />
        ))}
      </View>
    </View>
  );
}
