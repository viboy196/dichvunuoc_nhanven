import axios, {AxiosRequestConfig} from 'axios';
import {ExcuteResult, UseWaterRegister, WaterUser} from '../apiTypes';

const host = 'http://14.225.3.190:8911/api';
axios.defaults.baseURL = host;

export default class ApiRequest {
  static getDetailInfoNguoiDung = async (
    token: string,
    userName: string,
  ): Promise<ExcuteResult> => {
    const tag = 'DetailInfoNguoiDung';
    const url = `/AppUser/detail?userName=${userName}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static getWaterUserAll = async (token: string): Promise<ExcuteResult> => {
    const tag = 'getWaterUserAll';
    const url = '/WaterUser/all?v=1.0';
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getReadMeterPeriodPageByReader = async (
    token: string,
    year: number,
    month: number,
    pageIndex: number,
  ): Promise<ExcuteResult> => {
    const tag = 'ReadMeterPeriodPageByReader';
    const url = `/ReadMeterPeriod/page-by-reader?year=${year}&month=${month}&pageSize=10&pageIndex=${pageIndex}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static PostUseWaterRegisterAdd = async (
    input: UseWaterRegister,
  ): Promise<ExcuteResult> => {
    console.log('PostUseWaterRegisterAdd ');
    console.log(input);

    const url = '/UseWaterRegister/add?v=1.0';
    const config = {
      headers: {
        accept: 'text/plain',
      },
    };

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters, config);
    console.log(' data key.length :', Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
  static PostWaterUserAdd = async (
    input: WaterUser,
    token: string,
  ): Promise<ExcuteResult> => {
    console.log('PostWaterUserAdd ');

    const url = '/WaterUser/add?v=1.0';
    const config = {
      headers: {
        accept: 'text/plain',
        Authorization: `bearer ${token}`,
      },
    };

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters, config);
    console.log(' data key.length :', Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static PostWaterUserUpdate = async (
    input: WaterUser,
    token: string,
  ): Promise<ExcuteResult> => {
    console.log('PostWaterUserAdd ');

    const url = '/WaterUser/update?v=1.0';
    const config = {
      headers: {
        accept: 'text/plain',
        Authorization: `bearer ${token}`,
      },
    };

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters, config);
    console.log(' data key.length :', Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static PostWaterUserUpdateImage = async (
    input: {id: string; images: string[]},
    token: string,
  ): Promise<ExcuteResult> => {
    console.log('PostWaterUserAdd ');

    const url = '/WaterUser/update-image?v=1.0';
    const config = {
      headers: {
        accept: 'text/plain',
        Authorization: `bearer ${token}`,
      },
    };

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters, config);
    console.log(' data key.length :', Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static postChangeWaterFactory = async (input: {
    userName: string;
    waterFactoryId: string;
    token: string;
  }): Promise<ExcuteResult> => {
    console.log('ChangeWaterFactory ');
    const url = '/AppUser/change-water-factory?v=1.0';
    const tag = 'ChangeWaterFactory';
    const config = {
      headers: {
        Authorization: `bearer ${input.token}`,
        accept: 'text/plain',
      },
    };

    const bodyParameters = {
      userName: input.userName,
      waterFactoryId: input.waterFactoryId,
    };
    const res = await axios.post(url, bodyParameters, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
  static postLoginApi = async (input: {
    phone: string;
    password: string;
  }): Promise<ExcuteResult> => {
    const url = '/AppUser/auth?v=1.0';
    console.log('urlLogin ', url);
    const res = await axios.post(url, {
      userName: input.phone,
      password: input.password,
    });
    console.log(res.data);
    return res.data as ExcuteResult;
  };

  static getTollAreaByReader = async (data: {
    token: string;
    userId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetListTollAreaByReader';
    const url = `/TollArea/all-by-reader?userId=${data.userId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterUserAllByTollarea = async (data: {
    token: string;
    tollAreaId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetWaterUserAllByTollarea';
    const url = `/WaterUser/all-by-tollarea?tollAreaId=${data.tollAreaId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterInvoiceAllByWaterUser = async (data: {
    token: string;
    waterUserId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetWaterInvoiceAllByWateruser';
    const url = `/WaterInvoice/all-by-wateruser?waterUserId=${data.waterUserId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static WaterIndexAdd = async (data: {
    token: string;
    waterUserId: string;
    year: string;
    month: string;
    waterMeterNumber: string;
    image?: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetWaterInvoiceAllByWateruser';
    const url = '/WaterIndex/add?v=1.0';
    console.log(`${tag} url:`, url);

    const config = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };

    const bodyParameters = {
      waterUserId: data.waterUserId,
      year: data.year,
      month: data.month,
      waterMeterNumber: data.waterMeterNumber,
      image: data.image,
    };
    console.log(bodyParameters);

    const res = await axios.post(url, bodyParameters, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetProvinceAll = async (): Promise<ExcuteResult> => {
    const tag = 'GetProvinceAll';
    const url = '/Province/all?v=1.0';
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetUnitTypeAll = async (token: string): Promise<ExcuteResult> => {
    const tag = 'GetUnitTypeAll';
    const url = '/UnitType/all?v=1.0';
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetTollAreaAll = async (token: string): Promise<ExcuteResult> => {
    const tag = 'GetTollAreaAll';
    const url = '/TollArea/all?v=1.0';
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetWaterFactoryAll = async (): Promise<ExcuteResult> => {
    const tag = 'GetWaterFactoryAll';
    const url = '/WaterFactory/all?v=1.0';
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetDistrictByProvinceId = async ({
    provinceId,
  }: {
    provinceId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetDistrictByProvinceId';
    const url = `/District/get-by-provinceId?provinceId=${provinceId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetWardByDistrictId = async ({
    districtId,
  }: {
    districtId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetDistrictByProvinceId';
    const url = `/Ward/get-by-districtId?districtId=${districtId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static WaterIndexAddByWaterMeterCode = async (data: {
    token: string;
    waterMeterCode: string;
    year: string;
    month: string;
    waterMeterNumber: string;
    image?: string;
    note?: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetWaterInvoiceAllByWateruser';
    const url = '/WaterIndex/add-by-water-meter-code?v=1.0';
    console.log(`${tag} url:`, url);

    const config = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };

    const bodyParameters = {
      waterMeterCode: data.waterMeterCode,
      year: data.year,
      month: data.month,
      waterMeterNumber: data.waterMeterNumber,
      image: data.image,
    };
    console.log(bodyParameters);

    const res = await axios.post(url, bodyParameters, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static WaterIndexAllByWaterUser = async (data: {
    token: string;
    waterUserId: string;
  }): Promise<ExcuteResult> => {
    const tag = 'GetWaterInvoiceAllByWateruser';

    const url = `/WaterIndex/all-by-wateruser?waterUserId=${data.waterUserId}&v=1.0`;

    console.log(`${tag} url:`, url);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: 'text/plain',
      },
    };
    const res = await axios.get(url, config);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
}
