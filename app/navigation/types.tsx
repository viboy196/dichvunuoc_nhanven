/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {NotificationsType} from './redux/features/notification/NotificationSlice';
import {WaterUser} from '../utils/api/apiTypes';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  WelCome: undefined;
  Login: undefined;
  Register: undefined;
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  Account: undefined;
  changePassword: undefined;
  DoNuoc: {userId: string};
  KhuVucDoScreen: {tollAreaId: string; tollAreaName: string};
  ChiTietSoDoScreen: {
    waterUserId: string;
    waterUserName: string;
    waterMeterCode: string;
  };
  CameraWaterScreen: {
    waterUserId?: string;
    waterUserName?: string;
    waterMeterCode?: string;
  };
  ReadMeterPeriod: {
    month: number;
    year: number;
  };
  DanhSachHopDong: undefined;
  ThemHopDong: undefined;
  ChiTietHopDong: {
    waterUser: WaterUser;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
