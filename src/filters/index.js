/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-01-13 11:29:08
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 09:08:17
 */
/**
 * 格式化时间戳
 * @param {number} cent
 */
export function formatTimes([ms, isDay]) {
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

/**
 * 处理手机号,中间部分加**
 * @param {string} phone
 */
export function formatMobile(phone) {
  const reg = /(\d{3})\d{4}(\d{4})/;
  return phone.replace(reg, '$1****$2');
}
