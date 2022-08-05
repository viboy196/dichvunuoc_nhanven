import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {tintColorLight} from '../../constants/Colors';

export default function Contractinformation() {
  return (
    <View>
      <View>
        <Text>mã khách hàng</Text>
        <TextInput />
      </View>
      <View>
        <Text>Địa chỉ</Text>
        <TextInput />
      </View>

      <View>
        <Text>Số điện thoại</Text>
        <TextInput />
      </View>
      <View>
        <Text>Số điện thoại thông báo</Text>
        <TextInput />
      </View>
      <View>
        <Text>Mã số thuế</Text>
        <TextInput />
      </View>

      <View>
        <Text>Mục đích sử dụng</Text>
        <TextInput />
      </View>

      <View>
        <Text>Số hộ sử dụng</Text>
        <TextInput />
      </View>

      <View>
        <Text>Email</Text>
        <TextInput />
      </View>

      <View style={{...styles.btnLoginViewBorder, marginTop: 10}}>
        <TouchableOpacity style={styles.btnLoginView} onPress={() => {}}>
          <Text style={styles.btnLoginText}>xem hợp đồng sử dụng nước</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: tintColorLight,
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
