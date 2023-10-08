import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Side({navigation}: {navigation: any}) {
  return (
    <View className="bg-black">
      <Text className="text-white text-2xl">김밥</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}
