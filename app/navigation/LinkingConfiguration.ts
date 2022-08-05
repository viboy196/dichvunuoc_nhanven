/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';

import {RootStackParamList} from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['mychat://'],
  config: {
    screens: {
      WelCome: 'WelCome',
      Login: 'Login',
      Register: 'Register',
      Account: 'Account',
      changePassword: 'ChangePassword',
      KhuVucDoScreen: 'KhuVucDoScreen',
      DoNuoc: 'DoNuoc',
      ChiTietSoDoScreen: 'ChiTietSoDoScreen',
      CameraWaterScreen: 'CameraWaterScreen',
      ReadMeterPeriod: 'ReadMeterPeriod',
      DanhSachHopDong: 'DanhSachHopDong',
      ThemHopDong: 'ThemHopDong',
      ChiTietHopDong: 'ChiTietHopDong',
      Main: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },

          TabThree: {
            screens: {
              TabTwoScreen: 'three',
            },
          },
        },
      },
    },
  },
};

export default linking;
