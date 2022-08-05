import {View, Text} from '../../components/Themed';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function ReportScreen() {
  return (
    <View>
      <View>
        <Text>Liên hệ ngay với chúng tôi</Text>
      </View>
      <View>
        <Text>Hoặc Quý khách điền thông tin bên dưới</Text>
      </View>
      <View>
        <Text>Thông tin khách hàng</Text>
      </View>
      <View>
        <Text>Mã khách hàng</Text>
        <TextInput />
      </View>
      <View>
        <Text>Họ tên người yêu cầu</Text>
        <TextInput />
      </View>
      <View>
        <Text>Điện thoại liên hệ</Text>
        <TextInput />
      </View>
      <View>
        <Text>Email liên hệ</Text>
        <TextInput />
      </View>

      <View>
        <Text>Địa điểm sự cố</Text>
        <TextInput />
        <TextInput />
        <TextInput />
      </View>
      <View>
        <Text>Nội dung</Text>
        <TextInput />
      </View>
    </View>
  );
}
