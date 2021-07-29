import request from '@/utils/request';

/**
 * 根据商品sku获取商品详情
 */
export function getGoodsDetail(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getProductDetail`,
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
 * 添加购物车
 */
export function addCart(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/addShoppingCart`,
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
 * 获取购物车列表
 */
export function getCartList(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getShoppingCartList`,
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
 * 删除购物车
 */
export function delCart(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/delShoppingCart`,
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
 * 获取购物车推荐商品
 */
export function getCartRecommend(params) {
  return new Promise((resolve, reject) => {
    request({
      url: `/getRecommendationProduct`,
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
