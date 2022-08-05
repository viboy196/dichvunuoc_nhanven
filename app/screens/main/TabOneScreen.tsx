import {View, Text} from '../../components/Themed';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {tintColorLight} from '../../constants/Colors';
import {useAppDispatch, useAppSelector} from '../../redux/store/hooks';
import ApiRequest from '../../utils/api/Main/ApiRequest';
import {RootTabScreenProps} from '../../navigation/types';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {logOut} from '../../redux/features/auth/authSlices';
import WorkItem from '../../components/items/WorkItem';
import {Avatar} from 'react-native-paper';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const tag = 'TabOneScreen';
  const {token, userName} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [detailUser, setDetailUser] = useState<any>({});

  useEffect(() => {
    if (token && userName) {
      ApiRequest.getDetailInfoNguoiDung(token, userName)
        .then(data => {
          setDetailUser(data.result);
          console.log(`${tag} get detail success`);
          setLoading(false);
        })
        .catch(() => {
          dispatch(logOut());
        });
    }
  }, [dispatch, token, userName]);
  return (
    <View style={styles.container}>
      {loading && (
        <Spinner
          visible={true}
          textContent={'Loading ...'}
          textStyle={{color: '#fff', fontSize: 20}}
        />
      )}
      <View style={styles.header}>
        <Avatar.Image
          style={{marginLeft: 10}}
          size={75}
          source={require('../../assets/images/default-avatar.png')}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 22,
            fontWeight: '700',
            color: '#fff',
            width: 270,
          }}>
          {detailUser.fullName}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
        }}
      />
      <View
        style={{
          borderRadius: 10,
          marginVertical: 35,
          borderColor: '#e3e3e3',
          borderWidth: 2,
        }}>
        <Text style={styles.logoText}> Đọc nước </Text>
        <View style={{flexDirection: 'row'}}>
          <WorkItem
            backgroundColor={tintColorLight}
            workName={'Đọc nước'}
            image={require('../../assets/images/search/blur.png')}
            onPress={() => {
              navigation.navigate('CameraWaterScreen', {
                waterUserId: undefined,
                waterUserName: undefined,
              });
            }}
          />
          <WorkItem
            backgroundColor={'red'}
            workName={'Lịch đọc nước'}
            image={require('../../assets/images/search/compliant.png')}
            onPress={() => {
              navigation.navigate('ReadMeterPeriod', {
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
              });
            }}
          />
        </View>
      </View>
      <View
        style={{
          borderRadius: 10,
          marginVertical: 35,
          borderColor: '#e3e3e3',
          borderWidth: 2,
        }}>
        <Text style={styles.logoText}> Quản lý hộ dân </Text>
        <View style={{flexDirection: 'row'}}>
          <WorkItem
            backgroundColor={tintColorLight}
            workName={'Yêu cầu'}
            image={require('../../assets/images/search/blur.png')}
            onPress={() => {
              navigation.navigate('CameraWaterScreen', {
                waterUserId: undefined,
                waterUserName: undefined,
              });
            }}
          />
          <WorkItem
            backgroundColor={'red'}
            workName={'Danh sách hop đồng'}
            image={require('../../assets/images/search/compliant.png')}
            onPress={() => {
              navigation.navigate('DanhSachHopDong');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  header: {
    backgroundColor: tintColorLight,
    width: '100%',
    height: 90,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    top: -38,
    left: 20,
    position: 'absolute',
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: tintColorLight,
    // textShadowOffset: {width: 2, height: 2},
    // textShadowRadius: 5,
    // textShadowColor: '#fff',
  },
  avatarView: {
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'orange',
    position: 'relative',
  },
  avatarImage: {
    width: 75,
    height: 75,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
});
