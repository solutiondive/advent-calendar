import React from 'react';
import {View, Text} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Main({navigation}: {navigation: any}) {
  return (
    <View className="bg-black">
      <Text className="text-white text-2xl">김가네</Text>
      <MyButton
        title="Go to Side"
        onPress={() => navigation.navigate('Side')}
      />
    </View>
  );
}
