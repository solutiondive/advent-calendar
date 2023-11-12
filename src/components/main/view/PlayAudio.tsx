import React from 'react';
import {View} from 'react-native';
import Sound from 'react-native-sound';
import {Button} from '~/components/common/Layout';
import {useWidgetStore} from '~/shared/store';

export default function PlayAudio() {
  const {closeModal} = useWidgetStore();
  const playSound = () => {
    const soundInstance = new Sound(
      'hi-ginggang.m4a',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        soundInstance.play(() => {
          soundInstance.release();
        });
      },
    );
  };

  return (
    <View className="absolute top-1/4 flex h-1/2 w-2/3 justify-end rounded-xl bg-white shadow-xl shadow-black">
      <View className="flex items-center">
        <Button title="Play" onPress={playSound} />
        <Button title="Close" onPress={closeModal} />
      </View>
    </View>
  );
}
