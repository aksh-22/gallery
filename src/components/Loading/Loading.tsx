import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from 'src/constants/colors';

type Props = {};

const Loading = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
