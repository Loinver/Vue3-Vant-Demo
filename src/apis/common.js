import request from 'utils/request';
// 发送短信验证码
export function sendCode(data) {
  return new Promise((resolve, reject) => {
    request({
      url: '/sendCode',
      method: 'post',
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 获取行政区划列表
export function getAreaList(params) {
  return new Promise((resolve, reject) => {
    request({
      url: '/v1/api',
      method: 'post',
      data: {
        keyCode: 'hyedrihgfrdejksfbhs',
        sid: '1323244e3',
        cmd: 3063,
        data: params,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 通用接口请求函数
export function commonApi(params) {
  return new Promise((resolve, reject) => {
    request({
      url: '/v1/api',
      method: 'post',
      data: {
        keyCode: 'hyedrihgfrdejksfbhs',
        sid: '1323244e3',
        cmd: params.cmd,
        data: params.data,
      },
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
