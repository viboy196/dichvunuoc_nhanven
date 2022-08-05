import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {tintColorLight} from '../../constants/Colors';
import {Text, View} from '../Themed';

export default function WorkItem({
  backgroundColor,
  workName,
  image,
  onPress,
}: {
  backgroundColor: string;
  workName: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress}>
      <View
        style={{
          width: 150,
          height: 140,
          backgroundColor: onPress ? backgroundColor : '#e3e3e3',
          margin: 10,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Image
          source={
            image ? image : require('../../assets/images/installWater/home.png')
          }
          resizeMode="cover"
          style={styles.itemImage}
        />
        <View style={styles.viewItemText}>
          <Text style={styles.itemText}>{workName} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewItemImage: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tintColorLight,
    borderRadius: 75,
    marginRight: 10,
    marginLeft: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    tintColor: '#fff',
  },
  items: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  viewItemText: {
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
