import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import {RootStackParamList} from './types';
import LinkingConfiguration from './LinkingConfiguration';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import AccountScreen from '../screens/account/accountdetail';
import ChangePasswordScreen from '../screens/account/changepassword';
import KhuVucDoScreen from '../screens/KhuVucDo';
import DoNuocScreen from '../screens/DoNuoc';
import ChiTietSoDoScreen from '../screens/ChiTietSoDo';

import MainScreen from '../screens/main';
import {useAppSelector} from '../redux/store/hooks';
import CameraWaterScreen from '../screens/CameraWater';
import ReadMeterPeriodScreen from '../screens/ReadMeterPeriod';
import DanhSachHopDong from '../screens/quanlyhodan/DanhSachHopDong';
import ThemMoiHopDong from '../screens/quanlyhodan/ThemMoiHopDong';
import ChiTietHopDong from '../screens/quanlyhodan/ChiTietHopDong';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const auth = useAppSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {auth.token ? (
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{title: 'Thông tin khách hàng'}}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePasswordScreen}
        options={{title: 'Đổi mật khẩu'}}
      />

      <Stack.Screen
        name="KhuVucDoScreen"
        component={KhuVucDoScreen}
        options={({route}) => ({title: route.params.tollAreaName})}
      />
      <Stack.Screen
        name="CameraWaterScreen"
        component={CameraWaterScreen}
        options={({route}) => ({
          title: route.params.waterUserName
            ? 'Đo nước : ' + route.params.waterUserName
            : 'Đo nước',
        })}
      />

      <Stack.Screen
        name="ChiTietSoDoScreen"
        component={ChiTietSoDoScreen}
        options={({route}) => ({title: route.params.waterUserName})}
      />

      <Stack.Screen
        name="DoNuoc"
        component={DoNuocScreen}
        options={{title: 'Khu vực'}}
      />
      <Stack.Screen
        name="ReadMeterPeriod"
        component={ReadMeterPeriodScreen}
        options={{title: 'Lịch đọc nước'}}
      />
      <Stack.Screen
        name="DanhSachHopDong"
        component={DanhSachHopDong}
        options={{title: 'Danh Sách Hợp Đồng'}}
      />
      <Stack.Screen
        name="ThemHopDong"
        component={ThemMoiHopDong}
        options={{title: 'Thêm Mới Hợp Đồng'}}
      />
      <Stack.Screen
        name="ChiTietHopDong"
        component={ChiTietHopDong}
        options={{title: 'Chi tiết hợp đồng'}}
      />
    </Stack.Navigator>
  );
}
