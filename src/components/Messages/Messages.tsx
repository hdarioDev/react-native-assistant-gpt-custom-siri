import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Message} from '../../domain/ChatInterface';

interface Props {
  messages: Message[];
  ScrollViewRef?: any;
  startTextToSpeech: (message: string) => void;
}

const Messages = ({messages, ScrollViewRef, startTextToSpeech}: Props) => {
  return (
    <View className="flex-1 space-y-2 ">
      <View className="border border-gray-600 rounded-3xl mt-1 p-3 h-4/5">
        <ScrollView
          className="space-y-4"
          bounces={false}
          ref={ScrollViewRef}
          showsVerticalScrollIndicator={false}>
          {messages.map((message, index) => {
            if (message.role === 'assistant') {
              if (message.content.includes('https')) {
                return (
                  <View
                    key={index}
                    className="bg-emerald-100 w-56 h-56 rounded-2xl p-2 rounded-tl-none">
                    <Image
                      className="w-52 h-52 rounded-2xl"
                      resizeMode="contain"
                      source={{uri: message.content}}
                    />
                  </View>
                );
              } else {
                return (
                  <View
                    key={index}
                    className="bg-emerald-200 rounded-2xl p-3 w-3/4 rounded-tl-none">
                    <TouchableOpacity
                      className="absolute top-0 right-0 -mr-2 -mt-2"
                      onPress={() => startTextToSpeech(message.content)}>
                      <Image
                        className="w-7 h-7 rounded-full"
                        source={require('../../../assets/images/speak.png')}
                      />
                    </TouchableOpacity>

                    <Text className="text-gray-700">{message.content}</Text>
                  </View>
                );
              }
            } else {
              return (
                <View key={index} className="flex-row justify-end">
                  <View className="bg-white rounded-2xl p-3 w-3/4 rounded-tr-none">
                    <Text className="text-gray-700">{message.content}</Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;
