/**
 * 格式化金钱为元
 * @param {number} cent
 */
export function formatPrice(cent) {
  return cent / 100 || '-';
}
/**
 * 格式化时间戳
 * @param {number} cent
 */
export function formatTimer([ms, isDay]) {
  ms = Number(ms * 1000);
  if (ms > 0) {
    const dt = new Date(ms);
    if (isDay) {
      return [[dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-')].join(' ').replace(/(?=\b\d\b)/g, '0');
    }
    return [
      [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-'),
      [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':'),
    ]
      .join(' ')
      .replace(/(?=\b\d\b)/g, '0');
  }
  return '-';
}
export function formatMoney(val) {
  let res = '';
  if (val % 100 === 0) {
    res = `${val / 100}.00`;
  } else if (val % 100 < 10) {
    res = `${parseInt(val / 100, 10)}.0${val % 100}`;
  } else {
    res = `${parseInt(val / 100, 10)}.${val % 100}`;
  }
  return res;
}

/**
 * 处理手机号
 * @param {string} phone
 */
export function formatPhoneNumber(phone) {
  let reg = /(\d{3})\d{4}(\d{4})/;
  let str = phone.replace(reg, '$1****$2');
  return str;
}
