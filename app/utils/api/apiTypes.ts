export interface ExcuteResult {
  code?: string;
  errorMessage?: string;
  result?: any | string;
}

export type InputRegister = {
  phone: string;
  password: string;
  fullName: string;
  email: string;
};

export type InfoResult = {
  id?: string;
  name?: string;
  dsNhanVienModel?: [];
};

export type UseWaterRegister = {
  name?: string;
  representative?: string;
  title?: string;
  officeAddress?: string;
  mobilePhone?: string;
  landlinePhone?: string;
  email?: string;
  taxCode?: string;
  bankNo?: string;
  bankName?: string;
  provinceId?: string;
  districtId?: string;
  wardId?: string;
  address?: string;
  estimateAmoutWater?: string;
  reson?: string;
  identification?: string;
  identificationDate?: string;
  waterFactoryId?: string;
  unitTypeId?: string;
};

export type WaterUser = {
  name?: string;
  code?: string;
  tollAreaId?: string;
  phone?: string;
  bank?: string;
  bankNo?: string;
  waterMeterCode?: string;
  address?: string;
  userName?: string;
  unitTypeId?: string;
  notificationMethod?: string;
  paymentMethod?: string;
  gps?: string;
  organization?: string;
  status?: string;
  lastWaterMeterNumber?: 0;
  lastReadDate?: Date;
  images?: string[];
  id?: string;
};
export type WaterUserUpdate = {
  id?: string;
  name?: string;
  code?: string;
  tollAreaId?: string;
  phone?: string;
  bank?: string;
  bankNo?: string;
  waterMeterCode?: string;
  address?: string;
  userName?: string;
  unitTypeId?: string;
  notificationMethod?: string;
  paymentMethod?: string;
  gps?: string;
  organization?: string;
  status?: string;
  lastWaterMeterNumber?: 0;
  lastReadDate?: Date;
  images?: string[];
};
