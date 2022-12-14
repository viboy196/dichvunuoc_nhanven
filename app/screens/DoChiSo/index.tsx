// import React, {useEffect, useState} from 'react';
// import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
// import {TextInput, Button} from 'react-native-paper';
// import {Text, View} from '../../components/Themed';
// //import {RootStackScreenProps} from '../../navigation/types';
// import {Camera, CameraCapturedPicture, CameraType} from 'expo-camera';

// import window from '../../constants/Layout';
// export default function DoChiSoScreen() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(CameraType.back);
//   const [textMaDongHo, onChangeTextMaDongHo] = React.useState('');
//   const [camera, setCamera] = useState<Camera | null>(null);
//   const [textChiSo, onChangeTextChiSo] = React.useState('');

//   const [capturedImage, setCapturedImage] =
//     React.useState<CameraCapturedPicture>();

//   useEffect(() => {
//     (async () => {
//       const {status} = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
//   const __takePicture = async () => {
//     if (!camera) {
//       return;
//     }
//     const photo = await camera.takePictureAsync();
//     console.log(photo);
//     setCapturedImage(photo);
//   };

//   const __reTakePicture = async () => {
//     setCapturedImage(undefined);
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       {capturedImage ? (
//         <ImageBackground
//           source={{uri: capturedImage && capturedImage.uri}}
//           style={{
//             flex: 1,
//           }}>
//           <Button icon="camera" mode="contained" onPress={__reTakePicture}>
//             Chụp lại
//           </Button>
//         </ImageBackground>
//       ) : (
//         <Camera
//           style={styles.camera}
//           type={type}
//           ref={ref => {
//             setCamera(ref);
//           }}>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button} onPress={__takePicture}>
//               <View style={styles.inButton} />
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       )}

//       <TextInput
//         label={'mã đồng hồ'}
//         onChangeText={onChangeTextMaDongHo}
//         value={textMaDongHo}
//       />
//       <TextInput
//         label={'chỉ số đồng hồ'}
//         onChangeText={onChangeTextChiSo}
//         value={textChiSo}
//       />
//       <Button mode="contained" onPress={() => console.log('Pressed')}>
//         Ghi Nhận
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     width: 200,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   camera: {
//     // width: window.window.width,
//     // height: (4 * window.window.width) / 3,
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     margin: 20,
//     justifyContent: 'center',
//   },
//   button: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E3E3E3',
//   },
//   inButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderColor: '#6E6E6E',
//     borderWidth: 3,
//   },
// });

import {View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import {Button, TextInput} from 'react-native-paper';
import RNFS from 'react-native-fs';
export default function DoChiSoScreen() {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  const [camera, setCamera] = useState<Camera | null>(null);

  const [textMaDongHo, onChangeTextMaDongHo] = React.useState('');
  const [textChiSo, onChangeTextChiSo] = React.useState('');
  const [photoPath, setPhotoPath] = useState<string>();
  const devices = useCameraDevices();
  const device = devices.back;
  console.log(photoPath);

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
  const __takePicture = async () => {
    if (!camera) {
      return;
    }
    const photo = await camera.takePhoto();
    const path = RNFS.ExternalDirectoryPath + `/${new Date().getTime()}.jpg`;
    await RNFS.moveFile(photo.path, path);
    setPhotoPath('file://' + path);
    console.log(path);
  };
  return (
    <View style={styles.container}>
      {photoPath ? (
        <View style={{flex: 1}}>
          <Button
            mode="contained"
            icon={'camera'}
            onPress={() => {
              setPhotoPath(undefined);
            }}>
            Chụp lại
          </Button>
          <Image
            source={{uri: photoPath + '?' + new Date()}}
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
            frameProcessorFps={'auto'}
            ref={ref => {
              setCamera(ref);
            }}
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
      <Button
        mode="contained"
        onPress={() => {
          Alert.alert('Tính năng đang pháp triển');
        }}>
        Ghi Nhận
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
