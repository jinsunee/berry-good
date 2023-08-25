import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {RootStackParamList} from '../../navigators/RootStackNavigator';

export default function WebViewScreen() {
  const {params} = useRoute<RouteProp<RootStackParamList, 'WebView'>>();

  return <WebView source={{uri: params.url}} />;
}
