import 'react-native-reanimated';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import {Button, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
import {RootStackScreenProps} from '../../navigation/types';
import {Text} from '../../components/Themed';
import {useAppSelector} from '../../redux/store/hooks';
import ApiRequest from '../../utils/api/Main/ApiRequest';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import ImageResizer from 'react-native-image-resizer';
import {tintColorLight} from '../../constants/Colors';
export default function CameraWaterScreen({
  route,
}: RootStackScreenProps<'CameraWaterScreen'>) {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();
  const {token} = useAppSelector(state => state.auth);

  const [camera, setCamera] = useState<Camera | null>(null);
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });
  const [textMaDongHo, onChangeTextMaDongHo] = React.useState<
    string | undefined
  >(route.params.waterMeterCode ? route.params.waterMeterCode : undefined);
  const [textChiSo, onChangeTextChiSo] = React.useState<string>();
  const [photoPath, setPhotoPath] = useState<string>();
  const [base64Image, setBase64image] = useState<string>();
  const devices = useCameraDevices();
  const device = devices.back;
  console.log(barcodes);
  console.log('textMaDongHo', textMaDongHo);
  const __takePicture = useCallback(async () => {
    if (!camera) {
      return;
    }
    console.log(route.params.waterUserId, textMaDongHo);

    if (route.params.waterUserId === undefined && textMaDongHo === undefined) {
      Alert.alert('Thông báo', 'chưa tìm thấy mã Qrcode ');
      return;
    }
    const photo = await camera.takePhoto({
      qualityPrioritization: 'quality',
    });

    const path = RNFS.ExternalDirectoryPath + `/${new Date().getTime()}.jpg`;
    await RNFS.moveFile(photo.path, path);
    const resizedImageUrl = await ImageResizer.createResizedImage(
      path,
      480,
      638,
      'JPEG',
      80,
      0,
      RNFS.DocumentDirectoryPath,
    );
    console.log(resizedImageUrl);

    setPhotoPath('file://' + resizedImageUrl.path);
    const base64 = await RNFS.readFile(resizedImageUrl.uri, 'base64');
    console.log(base64);

    setBase64image(base64);
    // ImgToBase64.getBase64String('file://' + path)
    //   .then(base64String => {
    //     console.log(base64String);
    //     setBase64image(base64String);
    //   })
    //   .catch(err => console.log(err));
  }, [camera, route.params.waterUserId, textMaDongHo]);
  useEffect(() => {
    if (barcodes.length > 0 && textMaDongHo === undefined) {
      console.log('vào đây');

      onChangeTextMaDongHo(barcodes[0].displayValue);

      // __takePicture();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcodes]);

  useEffect(() => {
    console.log('vao day');
    Camera.requestCameraPermission().then(setCameraPermission);
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);
  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`,
  );
  if (cameraPermission == null || microphonePermission == null) {
    // still loading
    return null;
  }
  if (device == null) {
    return <View />;
  }

  const ghinhan = async () => {
    if (token && route.params.waterUserId && textChiSo) {
      ApiRequest.WaterIndexAdd({
        token: token,
        waterUserId: route.params.waterUserId,
        year: new Date().getFullYear().toString(),

        month: (new Date().getMonth() + 1).toString(),
        waterMeterNumber: textChiSo,
        image: base64Image,
      })
        .then(data => {
          console.log(data);

          if (data.code === '00') {
            Alert.alert(
              'thành công',
              `ghi nhận số đo  ${
                new Date().getMonth() + 1
              }/ ${new Date().getFullYear()}`,
            );
          } else {
            Alert.alert('thành công', data.errorMessage);
          }
        })
        .catch(() => {
          Alert.alert('thất bại', 'ghi nhận thất bại');
        });
    } else {
      if (token && textMaDongHo && textChiSo) {
        ApiRequest.WaterIndexAddByWaterMeterCode({
          token: token,
          waterMeterCode: textMaDongHo,
          year: new Date().getFullYear().toString(),

          month: (new Date().getMonth() + 1).toString(),
          waterMeterNumber: textChiSo,
          image: base64Image,
        })
          .then(data => {
            console.log(data);

            if (data.code === '00') {
              Alert.alert(
                'thành công',
                `ghi nhận số đo  ${
                  new Date().getMonth() + 1
                }/ ${new Date().getFullYear()}`,
              );
            } else {
              Alert.alert('thành công', data.errorMessage);
            }
          })
          .catch(() => {
            Alert.alert('thất bại', 'ghi nhận thất bại');
          });
      } else {
        Alert.alert('trường dữ liệu bị thiếu hoặc không hợp lệ');
      }
    }
  };
  if (photoPath) {
    return (
      <View style={{flex: 1}}>
        <Image
          // source={{uri: photoPath}}
          source={{uri: `data:image/jpeg;base64,${base64Image}`}}
          style={[styles.camera, {backgroundColor: 'black'}]}
        />

        <TextInput
          label={'mã đồng hồ'}
          onChangeText={onChangeTextMaDongHo}
          value={textMaDongHo}
        />
        <TextInput
          label={'chỉ số đồng hồ'}
          onChangeText={onChangeTextChiSo}
          value={textChiSo}
          keyboardType={'numeric'}
        />
        <Button
          mode="contained"
          onPress={() => {
            ghinhan();
          }}>
          Ghi Nhận chỉ số
        </Button>
        <TouchableOpacity
          onPress={() => {
            setPhotoPath(undefined);
            if (!route.params.waterUserId) {
              onChangeTextMaDongHo(undefined);
            }
          }}
          style={{position: 'absolute', justifyContent: 'flex-end'}}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              width: 120,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>Chụp lại</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
          photo={true}
          ref={ref => {
            setCamera(ref);
          }}
          frameProcessor={
            textMaDongHo === undefined ? frameProcessor : undefined
          }
          frameProcessorFps={2}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={__takePicture}>
            <View style={styles.inButton} />
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        label={'mã đồng hồ'}
        onChangeText={onChangeTextMaDongHo}
        value={textMaDongHo}
      />
      <TextInput
        label={'chỉ số đồng hồ'}
        onChangeText={onChangeTextChiSo}
        value={textChiSo}
        keyboardType={'numeric'}
      />
      {textMaDongHo && !route.params.waterUserId && (
        <TouchableOpacity
          onPress={() => {
            onChangeTextMaDongHo(undefined);
          }}
          style={{position: 'absolute', alignItems: 'flex-end'}}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              width: 120,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>Quét lại</Text>
          </View>
        </TouchableOpacity>
      )}
      {textMaDongHo === undefined && !route.params.waterUserId && (
        <TouchableOpacity
          style={{position: 'absolute', width: '100%', alignItems: 'center'}}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              width: 160,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#fff'}}>Quét mã đồng hồ </Text>
            <ActivityIndicator color={tintColorLight} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  camera: {
    // width: window.window.width,
    // height: (4 * window.window.width) / 3,
    flex: 1,
    backgroundColor: 'red',
  },
  buttonContainer: {
    bottom: 20,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
  },
  inButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#6E6E6E',
    borderWidth: 3,
  },
});
