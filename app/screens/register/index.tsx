import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/items/InputForm';
import {View, Text} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';
import {RootStackScreenProps} from '../../navigation/types';
import {validateName, validatePassword} from '../../utils/validate';

export default function Register({
  navigation,
}: RootStackScreenProps<'Register'>) {
  const [textPhone, setTextPhone] = useState('');

  const [textPassword, setTextPassword] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
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
            <Text style={styles.logoText}> Đăng Ký </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.fromInput}>
              <Input
                title={'Số điện thoại'}
                value={textPhone}
                keyboardType={'numeric'}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPhone(text);
                }}
                icon="phone"
                color={tintColorLight}
                errorMessages={
                  validateName(textPhone)
                    ? undefined
                    : 'Số điện thoại không hợp lệ'
                }
              />
              <Input
                title={'Số điện thoại'}
                value={textPhone}
                keyboardType={'numeric'}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPhone(text);
                }}
                icon="phone"
                color={tintColorLight}
                errorMessages={
                  validateName(textPhone)
                    ? undefined
                    : 'Số điện thoại không hợp lệ'
                }
              />
              <Input
                title={'Mật khẩu'}
                value={textPassword}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPassword(text);
                }}
                icon="key"
                color={tintColorLight}
                secureTextEntry={true}
                errorMessages={
                  validatePassword(textPassword)
                    ? undefined
                    : 'mật khẩu quá ngắn'
                }
              />
            </View>
            <View style={styles.btnLoginViewBorder}>
              <TouchableOpacity style={styles.btnLoginView} onPress={() => {}}>
                <Text style={styles.btnLoginText}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.redoLogin}>
              <Text style={styles.redoLoginTextInfo}> Đã có tài khoản?</Text>
              <TouchableOpacity
                onPress={() => {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  }
                }}>
                <Text style={styles.redoLoginTextInfoLogin}> Đăng nhập </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
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
});
