import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '~/components/common/Layout';
import {buttons} from '~/document/home/buttons';

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View className="flex flex-col">
      <View className=" w-full">
        <Text className="text-2xl">This is the Home Screen</Text>
      </View>
      <View className="mt-auto flex h-full w-full flex-col items-center justify-end">
        {buttons.map((button, index) => (
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
