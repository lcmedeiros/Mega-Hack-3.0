import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export const returnButton = StyleSheet.create({
  ReturnButton: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
    alignSelf: "stretch",
    position: "absolute",
    top: 10,
  }
})