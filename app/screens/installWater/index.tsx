import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';
export default function InstallWaterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View style={styles.viewItemImage}>
          <Image
            source={require('../../assets/images/installWater/deal.png')}
            resizeMode="cover"
            style={styles.itemImage}
          />
        </View>
        <View style={styles.viewItemText}>
          <Text style={styles.itemText}> Thỏa thuận đấu nối cấp nước </Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.viewItemImage}>
          <Image
            source={require('../../assets/images/installWater/deal.png')}
            resizeMode="cover"
            style={styles.itemImage}
          />
        </View>
        <View style={styles.viewItemText}>
          <Text style={styles.itemText}> Cấp nước hộ gia đình </Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.viewItemImage}>
          <Image
            source={require('../../assets/images/installWater/deal.png')}
            resizeMode="cover"
            style={styles.itemImage}
          />
        </View>
        <View style={styles.viewItemText}>
          <Text style={styles.itemText}> Cấp nước cơ quan tổ chức </Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.viewItemImage}>
          <Image
            source={require('../../assets/images/installWater/deal.png')}
            resizeMode="cover"
            style={styles.itemImage}
          />
        </View>
        <View style={styles.viewItemText}>
          <Text style={styles.itemText}> Tiến độ hồ sơ </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewItemImage: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#3e3e3e',
    borderRadius: 20,
    marginRight: 10,
  },

  itemImage: {
    width: 35,
    height: 35,
    tintColor: '#fff',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  viewItemText: {
    flex: 6,
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#6e6e6e',
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2d86ff',
  },
});
