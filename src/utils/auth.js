const TokenKey = 'JD_USER_TOKEN';
const Cart = 'JD_SELECT_SKU';
const Sku = 'JD_SKU';
const ShareSku = 'JD_SHARE_SKU';
const ReferrerToken = 'JD_Referrer_TOKEN'; // 推荐人Token

// 用户token存储
export function getToken() {
  return sessionStorage.getItem(TokenKey) || '';
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, decodeURIComponent(token));
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey);
}

// 存储的购物车商品的checked、数量、sku信息
export function getCart() {
  return sessionStorage.getItem(Cart) ? sessionStorage.getItem(Cart).split(',') : [];
}

export function setCart(val) {
  return sessionStorage.setItem(Cart, val);
}

export function removeCart() {
  return sessionStorage.removeItem(Cart);
}

// 分享状态下 存储的购物车商品
export function getSessionSku() {
  return sessionStorage.getItem(Sku);
}

export function setSessionSku(val) {
  return sessionStorage.setItem(Sku, val);
}

export function removeSessionSku() {
  return sessionStorage.removeItem(Sku);
}

// 分享状态预下单 返回的下单人信息包含注册信息
export function getShareSku() {
  return sessionStorage.getItem(ShareSku);
}

export function setShareSku(val) {
  return sessionStorage.setItem(ShareSku, val);
}

export function removeShareSku() {
  return sessionStorage.removeItem(ShareSku);
}

// 分享人token存储
export function getReferrerToken() {
  return sessionStorage.getItem(ReferrerToken) || '';
}

export function setReferrerToken(token) {
  return sessionStorage.setItem(ReferrerToken, decodeURIComponent(token));
}

export function removeReferrerToken() {
  return sessionStorage.removeItem(ReferrerToken);
}
