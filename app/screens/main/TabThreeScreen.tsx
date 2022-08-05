import {StyleSheet} from 'react-native';
import React from 'react';
import {tintColorLight} from '../../constants/Colors';
import {RootTabScreenProps} from '../../navigation/types';
import {View} from '../../components/Themed';

export default function TabThreeScreen({}: RootTabScreenProps<'TabThree'>) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonView: {
    width: '90%',
    height: 40,
    backgroundColor: tintColorLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
