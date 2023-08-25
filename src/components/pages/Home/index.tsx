import auth from '@react-native-firebase/auth';
import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable onPress={() => auth().signOut()}>
        <Text>SignOut</Text>
      </Pressable>
    </SafeAreaView>
  );
}
