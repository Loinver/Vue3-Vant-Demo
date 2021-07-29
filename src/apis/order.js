import request from '@/utils/request';

/**
 *  【分享】预提交订单
 */
export function preShareApplyOrder(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/preApplyOrderShare`,
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
 * 预提交订单
 */
export function preApplyOrder(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/preApplyOrder`,
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
 * 正式下单
 */
export function applyOrder(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/applyOrder`,
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
 * 获取用户订单
 */
export function getOrderList(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getOrderList`,
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
 * 获取用户订单详情
 */
export function getOrderDetails(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getOrderDetail`,
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
 * 取消订单
 */
export function postCancelOrder(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/cancelOrder`,
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
 * 删除订单
 */
export function postDelOrder(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/delOrder`,
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
 * 查询物流信息
 */
export function getOrderTrack(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getOrderTrack`,
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
 * 获取用户所有物流信息
 */
export function getAddressList(params) {
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
