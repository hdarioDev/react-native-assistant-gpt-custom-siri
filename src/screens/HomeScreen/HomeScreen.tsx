import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {FooterActions, HeaderNav, Messages} from '../../components';
import {useTalking} from '../../hooks/useTalking';

const HomeScreen = () => {
  const {
    messages,
    recording,
    speaking,
    loading,
    ScrollViewRef,
    isMaxQuestions,
    stopSpeaking,
    startRecording,
    clear,
    setRecording,
    startTextToSpeach,
  } = useTalking();

  return (
    <ImageBackground
      source={require('../../../assets/images/fondo.jpg')}
      className="flex-1 bg-cover">
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={10}
      />

      <View className="flex-1 flex mx-5">
        <View className="flex-row h-12 justify-center" />
        <HeaderNav />
        <Messages
          messages={messages}
          ScrollViewRef={ScrollViewRef}
          startTextToSpeech={startTextToSpeach}
        />
      </View>
      <FooterActions
        loading={loading}
        recording={recording}
        stopRecording={() => {
          setRecording(false);
        }}
        startRecording={startRecording}
        messages={messages}
        speaking={speaking}
        stopSpeaking={stopSpeaking}
        clear={clear}
        isMaxQuestions={isMaxQuestions}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
