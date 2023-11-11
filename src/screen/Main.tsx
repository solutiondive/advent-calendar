import React from 'react';
import {FlatList, View} from 'react-native';
import {Button} from '~/components/common/Layout';
import DayNote from '~/components/main/view/DayNote';

export default function Main({navigation}: {navigation: any}) {
  return (
    <View className="flex h-full items-center justify-center">
      <View className="flex items-center justify-center py-16  ">
        <FlatList
          data={Array(28)
            .fill(0)
            .map((_, index) => ({key: index.toString()}))}
          renderItem={({index}) => <DayNote key={index} day={index + 1} />}
          keyExtractor={item => item.key}
          numColumns={7}
        />
      </View>
      <View className="mt-auto flex h-full w-full flex-col justify-end">
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}
