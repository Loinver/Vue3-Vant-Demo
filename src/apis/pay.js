import request from '@/utils/request';

/**
 * 支付订单
 * type：int 支付方式 1微信 2支付宝
 */
export function getPayData(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/createPayOrderId`,
      method: 'post',
      data: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 获取code
 */
export function getWxPublicCode(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getWxPublicCode`,
      method: 'post',
      data: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 获取openId
 */
export function getWxPublicOpenId(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getWxPublicOpenId`,
      method: 'post',
      data: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
