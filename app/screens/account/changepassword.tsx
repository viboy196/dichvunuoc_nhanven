import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Text, View} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';
import Input from '../../components/items/InputForm';
import {validatePassword} from '../../utils/validate';

export default function ChangePassword() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [textPassword, setTextPassword] = useState('Admin123@');

  return (
    <View style={styles.container}>
      <Text>changePassword</Text>

      <Input
        title={'Mật khẩu cũ'}
        value={textPassword}
        onChangeInput={setTextPassword}
        icon="key"
        color={tintColorLight}
        secureTextEntry={true}
        errorMessages={
          validatePassword(textPassword) ? undefined : 'mật khẩu quá ngắn'
        }
      />
      <Input
        title={'Mật khẩu mới'}
        value={textPassword}
        onChangeInput={(text: string) => {
          console.log(text);
          setTextPassword(text);
        }}
        icon="key"
        color={tintColorLight}
        secureTextEntry={true}
        errorMessages={
          validatePassword(textPassword) ? undefined : 'mật khẩu quá ngắn'
        }
      />
      <Input
        title={'Nhập lại mật khẩu mới'}
        value={textPassword}
        onChangeInput={(text: string) => {
          console.log(text);
          setTextPassword(text);
        }}
        icon="key"
        color={tintColorLight}
        secureTextEntry={true}
        errorMessages={
          validatePassword(textPassword) ? undefined : 'mật khẩu quá ngắn'
        }
      />
      <View style={styles.btnLoginViewBorder}>
        <TouchableOpacity style={styles.btnLoginView} onPress={() => {}}>
          <Text style={styles.btnLoginText}>Thay đổi mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
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
    backgroundColor: tintColorLight,
    width: '80%',
    height: 50,
    borderRadius: 30,
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
});
