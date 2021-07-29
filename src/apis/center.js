import request from '@/utils/request';

/**
 * 获取个人中心页面的数据【用户身份、订单badg】
 */
export function getUserInfo(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/personalCenter`,
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
 * 获取区域
 */
export function getArea(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getArea`,
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
 * 获取所有地址
 */
export function getAllAddress(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getUserAddress`,
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
 * 设置默认地址
 */
export function setAddressDefault(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/setMainAddress`,
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
 * 删除地址
 */
export function delAddress(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/delLogistics`,
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
 * 根据ID获取地址详情
 */
export function getAddressById(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getUserAddressById`,
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
 * 编辑地址
 */
export function updateAddressById(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/updateLogistics`,
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
 * 获取用户积分
 */
export function getIntegral(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/myIntegral`,
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
