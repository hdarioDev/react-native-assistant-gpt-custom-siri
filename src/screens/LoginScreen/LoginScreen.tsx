import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

import {RootStackParams} from '../../navigation/Navigator';

export default function LoginScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();

  return (
    <ImageBackground
      source={require('../../../assets/images/fondo.jpg')}
      className="flex-1 bg-cover">
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={5}
      />
      <View className="flex-1 flex justify-between my-10">
        <View className="space-y-2">
          <Text className="text-center tracking-wider text-gray-100 pt-2 font-semibold">
            Powered by hdariodev.
          </Text>
        </View>
        <View className="flex-1" />
        <TouchableOpacity
          className="bg-emerald-600 h-14 mx-5 p-3 rounded-xl mt-3"
          onPress={() => navigation.navigate('home')}>
          <Text className="text-center font-bold text-slate-50 text-lg">
            Agenda una cita
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
