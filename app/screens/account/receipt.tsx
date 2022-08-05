import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';
import {View, Text} from '../../components/Themed';
import {tintColorLight} from '../../constants/Colors';

export default function receipt() {
  return (
    <View style={styles.container}>
      <Text>mã khách hàng</Text>
      <Text>chỉ số cũ</Text>
      <Text>chỉ số mới</Text>
      <Text>tiêu thụ</Text>
      <View>
        <Text>thông tin chi tiết</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>SL(m³)</DataTable.Title>
            <DataTable.Title>Đơn giá (đ)</DataTable.Title>
            <DataTable.Title>Thành tiền (đ)</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>4</DataTable.Cell>
            <DataTable.Cell>5.973</DataTable.Cell>
            <DataTable.Cell>23.892</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Cộng 4 (m³)</DataTable.Cell>
            <DataTable.Cell>{''}</DataTable.Cell>
            <DataTable.Cell>23.892</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Thuế GTGT (5%)</DataTable.Cell>
            <DataTable.Cell>{''}</DataTable.Cell>
            <DataTable.Cell>1.195</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Phí BVMT (10%)</DataTable.Cell>
            <DataTable.Cell>{''}</DataTable.Cell>
            <DataTable.Cell>2.389</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Tổng cộng</DataTable.Cell>
            <DataTable.Cell>{''}</DataTable.Cell>
            <DataTable.Cell>27.476</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Tiền thanh toán</DataTable.Cell>
            <DataTable.Cell>{''}</DataTable.Cell>
            <DataTable.Cell>27.476</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              {' '}
              {'Bằng chữ : Hai mươi bẩy nghìn bốn trăm bẩy mươi'} {'\n'}
              {' sáu đồng'}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View>
          <Text>Chưa thanh toán</Text>
        </View>
      </View>
      <View style={styles.btnLoginViewBorder}>
        <TouchableOpacity style={styles.btnLoginView} onPress={() => {}}>
          <Text style={styles.btnLoginText}>Thanh toán</Text>
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
