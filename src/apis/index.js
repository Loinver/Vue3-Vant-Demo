import request from '@/utils/request';

/**
 * 获取首页数据
 */
export function getHomeData(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getHomeData`,
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
 * 获取首页数据
 */
export function getUserAccount(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getUserAccount`,
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
