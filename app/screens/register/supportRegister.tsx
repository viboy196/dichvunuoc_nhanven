import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {View, Text} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';

import Layout from '../../constants/Layout';

export default function SupportRegisterScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/water.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/dichvunuoc.png')}
            resizeMode="cover"
            style={styles.logoImage}
          />
          <Text style={styles.logoText}> DỊCH VỤ NƯỚC </Text>
          <Text style={styles.logoText}> Hướng dẫn đăng ký </Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Text>
              {' '}
              Bước 1 : nhập số điện thoại ,{'\n'} mật khẩu và nhập lại mật khẩu
            </Text>
            <Image
              source={require('../../assets/images/supportregister/Screenshot_1657347284.png')}
              resizeMode="cover"
              style={styles.captureImage}
            />
            <Text>
              {' '}
              Bước 2 : nhấn nút "Đăng ký" ,{'\n'} để đăng ký tài khoản
            </Text>
            <Image
              source={require('../../assets/images/supportregister/Screenshot_1657347284_1.png')}
              resizeMode="cover"
              style={styles.captureImage}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  empty: {flex: 1},
  header: {
    flex: 2,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoImage: {width: 100, height: 100},
  logoText: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: '#3e3e3e',
  },
  body: {
    flex: 5,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
  },
  fromInput: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  viewInfo: {
    flexDirection: 'row',
  },
  textInfo: {
    color: tintColorLight,
    fontWeight: '700',
  },
  textInfoCheckBox: {
    color: tintColorLight,
  },
  btnLoginViewBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 5,
  },
  btnLoginView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '80%',
    height: 50,
    borderRadius: 30,
    elevation: 5,
  },
  btnLoginText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  viewTextInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  viewButtonInfo: {
    margin: 20,
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  viewButtonItem: {
    flex: 1,
    height: 210,
    justifyContent: 'center',
  },
  viewButtonItemText: {
    marginTop: 5,
    height: 30,
  },
  redoLogin: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  redoLoginTextInfo: {
    color: tintColorLight,
    fontSize: 16,
  },
  redoLoginTextInfoLogin: {
    color: tintColorLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
  captureImage: {
    width: Layout.window.width * 0.7,
    height: Layout.window.height * 0.7,
  },
});
