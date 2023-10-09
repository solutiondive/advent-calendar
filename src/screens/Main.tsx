import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MyButton from '~/components/MyButton';

export default function Main({navigation}: {navigation: any}) {
  return (
    <View className="flex h-full items-center justify-center">
      <MyButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View className=" h-64 ">
        <FlatList
          data={Array(28)
            .fill(0)
            .map((_, index) => ({key: index.toString()}))}
          renderItem={({index}) => (
            <View className="m-1">
              <DayNote day={index + 1} />
            </View>
          )}
          keyExtractor={item => item.key}
          numColumns={7}
        />
      </View>
    </View>
  );
}

function DayNote({day}: {day: number}) {
  return (
    <View className="h-12 w-10 border-2 border-black">
      <Text className="text-center">{day}</Text>
    </View>
  );
}
