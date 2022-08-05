import 'react-native-reanimated';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import {Button, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import ImageResizer from 'react-native-image-resizer';
export default function CameraWaterScreen() {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  const [camera, setCamera] = useState<Camera | null>(null);
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });
  const [textMaDongHo, onChangeTextMaDongHo] = React.useState<
    string | undefined
  >();
  const [textChiSo, onChangeTextChiSo] = React.useState<string>();
  const [photoPath, setPhotoPath] = useState<string>();
  const [base64Image, setBase64image] = useState<string>();
  const devices = useCameraDevices();
  const device = devices.back;
  console.log(barcodes);
  const __takePicture = useCallback(async () => {
    if (!camera) {
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
  }, [camera]);
  useEffect(() => {
    if (barcodes.length > 0 && textMaDongHo === undefined) {
      onChangeTextMaDongHo(barcodes[0].displayValue);
      // __takePicture();
    }
  }, [barcodes, textMaDongHo]);

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

  return (
    <View style={styles.container}>
      {photoPath ? (
        <View style={{flex: 1}}>
          <Button
            mode="contained"
            icon={'camera'}
            onPress={() => {
              setPhotoPath(undefined);
              onChangeTextMaDongHo(undefined);
            }}>
            Chụp lại
          </Button>
          <Image
            // source={{uri: photoPath}}
            source={{uri: `data:image/jpeg;base64,${base64Image}`}}
            style={[styles.camera, {backgroundColor: 'black'}]}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Camera
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
            ref={ref => {
              setCamera(ref);
            }}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={__takePicture}>
              <View style={styles.inButton} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TextInput
        label={'mã đồng hồ'}
        onChangeText={onChangeTextMaDongHo}
        value={textMaDongHo}
      />
      <TextInput
        label={'chỉ số đồng hồ'}
        onChangeText={onChangeTextChiSo}
        value={textChiSo}
      />
      <Button mode="contained" onPress={() => {}}>
        Ghi Nhận chỉ số
      </Button>
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
