import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Checkbox} from 'react-native-paper';
import Input from '../../components/items/InputForm';
import {View, Text} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';
import {RootStackScreenProps} from '../../navigation/types';
import {
  loginAsync,
  logOut,
  setStateAuthRemember,
} from '../../redux/features/auth/authSlices';
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
import {validatePassword, validateUserName} from '../../utils/validate';

export default function Login({}: RootStackScreenProps<'Login'>) {
  useEffect(() => {
    dispatch(logOut());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {loading, errorMessage, checkedAuth, userName, password} =
    useAppSelector(state => state.auth);
  console.log(errorMessage);

  const dispatch = useAppDispatch();
  const [textPhone, setTextPhone] = useState<string>();
  const [textPassword, setTextPassword] = useState<string>();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (checkedAuth && userName && password) {
      setTextPhone(userName);
      setTextPassword(password);
      setChecked(checkedAuth);
    }
  }, [checkedAuth, password, userName]);

  if (errorMessage && loading !== 'idle') {
    Alert.alert('lỗi', errorMessage);
    dispatch(logOut());
  }
  return (
    <View style={styles.container}>
      {loading === 'pending' && (
        <Spinner
          visible={true}
          textContent={'Đăng Nhập ...'}
          textStyle={styles.spinnerTextStyle}
        />
      )}
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

            <Text style={styles.logoText}> NHÂN VIÊN </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.fromInput}>
              <Input
                title={'Tài khoản'}
                value={textPhone}
                keyboardType={'default'}
                onChangeInput={(text: string) => {
                  console.log(text);
                  setTextPhone(text);
                }}
                icon="phone"
                color={tintColorLight}
                errorMessages={
                  validateUserName(textPhone)
                    ? undefined
                    : 'Số tài khoản không hợp lệ'
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
                    : 'mật khẩu phải nhiều hơn 6 kí tự có chữ cái'
                }
              />
            </View>
            <View style={styles.viewInfo}>
              <View style={styles.viewTextInfo}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#3e3e3e'}
                />
                <Text style={styles.textInfoCheckBox}>Nhớ thông tin</Text>
              </View>
              <View style={styles.empty} />
              {/* <TouchableOpacity
                style={styles.viewTextInfo}
                onPress={handlePressOpenUrl}>
                <Text style={styles.textInfo}>Chính sách và quy định</Text>
              </TouchableOpacity> */}
            </View>
            <View style={styles.btnLoginViewBorder}>
              <TouchableOpacity
                style={styles.btnLoginView}
                onPress={() => {
                  if (
                    textPhone &&
                    textPassword &&
                    validateUserName(textPhone) &&
                    validatePassword(textPassword)
                  ) {
                    dispatch(
                      setStateAuthRemember({
                        input: {
                          loading: 'idle',
                          checkedAuth: checked,
                          userName: textPhone,
                          password: textPassword,
                        },
                      }),
                    );

                    dispatch(
                      loginAsync({phone: textPhone, password: textPassword}),
                    );
                  } else {
                    Alert.alert('Lỗi', 'Tài khoản hoặc mật khẩu không hợp lệ');
                  }
                }}>
                <Text style={styles.btnLoginText}>Đăng nhập</Text>
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
  spinnerTextStyle: {
    color: '#FFF',
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
    marginVertical: 10,
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
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
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
    marginHorizontal: 10,
  },
  viewButtonInfo: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
  },
  viewButtonItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonItemText: {
    marginTop: 5,
    height: 30,
    alignItems: 'center',
  },
});
