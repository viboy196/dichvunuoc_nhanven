import {View, Text} from '../../components/Themed';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';

import {Button} from 'react-native-paper';
import Layout from '../../constants/Layout';
import {RootStackScreenProps} from '../../navigation/types';
import {useAppSelector} from '../../redux/store/hooks';
import ApiRequest from '../../utils/api/Main/ApiRequest';
import {WaterUser} from '../../utils/api/apiTypes';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export default function DanhSachHopDong({
  navigation,
}: RootStackScreenProps<'DanhSachHopDong'>) {
  const {token} = useAppSelector(state => state.auth);
  const [listWaterUser, setListWaterUser] = useState<Array<WaterUser>>([]);

  const openChiTietHopDong = (waterUser: WaterUser) => {
    navigation.navigate('ChiTietHopDong', {waterUser});
  };

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (token) {
      ApiRequest.getWaterUserAll(token)
        .then(data => {
          setListWaterUser(data.result.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [token]);
  return (
    <View style={styles.container}>
      {loading && (
        <Spinner
          visible={true}
          textContent={'Loading ...'}
          textStyle={{color: '#fff', fontSize: 20}}
        />
      )}
      <ScrollView>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={styles.enpty} />
          <View style={{width: 200, padding: 10}}>
            <Button
              mode="contained"
              icon={'inbox'}
              onPress={() => {
                console.log('vao day');

                navigation.navigate('ThemHopDong');
              }}>
              Thêm Hợp Đồng
            </Button>
          </View>
        </View>
        <FlatList
          data={listWaterUser}
          renderItem={({item, index}) => (
            <ItemHopDong
              item={item}
              index={index}
              openChiTietHopDong={openChiTietHopDong}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const ItemHopDong = ({
  item,
  index,
  openChiTietHopDong,
}: {
  item: WaterUser;
  index: number;
  openChiTietHopDong: (waterUser: WaterUser) => void;
}) => {
  return (
    <View
      style={{
        width: Layout.window.width - 20,
        flexDirection: 'row',
        margin: 5,
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>STT</Text>
        <Text>{index + 1}</Text>
      </View>

      <View style={{flex: 9}}>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Mã HĐ</Text>
          <Text style={styles.rowContent}>{item.code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Đại diện HĐ</Text>
          <Text style={styles.rowContent}>{item.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>TK đại diện</Text>
          <Text style={styles.rowContent}>{item.userName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}> Khu vực</Text>
          <Text style={styles.rowContent}>{item.tollAreaId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Loại hình đơn vị</Text>
          <Text style={styles.rowContent}>{item.unitTypeId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Mã đồng hồ nước</Text>
          <Text style={styles.rowContent}>{item.waterMeterCode}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Trạng thái</Text>
          <Text style={styles.rowContent}>
            {item.status === 'Active' ? 'Đang sử dụng' : ''}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Thao tác</Text>
          <View style={styles.rowContent}>
            <Button
              mode="contained"
              onPress={() => {
                openChiTietHopDong(item);
              }}>
              Chi tiết
            </Button>
            <Button mode="contained" onPress={() => {}}>
              GPS
            </Button>
            <Button mode="contained" onPress={() => {}}>
              XÓA
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  enpty: {flex: 1},
  rowTitle: {flex: 2},

  rowContent: {flex: 3},
  row: {
    flexDirection: 'row',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    padding: 2,
    alignItems: 'center',
  },
});
