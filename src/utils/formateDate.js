/**
 * 原始数据中的时间格式化
 * 2016-09-14-15-2  =>  2016/9/14 15:00
 */
export function buildTime(str) {
  const cuts = str.match(/(\d+)/g);
  return `${cuts[0]}/${cuts[1]}/${cuts[2]} ${cuts[3]}:${cuts[4]}0`;
}

/**
 * 原始数据中的时间转为标准Unix毫秒时间
 * 2016-09-14-15-2  =>  1476428400000
 */
export function buildUnixTime(str) {
  if (!str) {
    return null
  }
  if (typeof str === 'number') {
    return new Date(str)
  } else if (str instanceof Date) {
    return str
  }

  const cuts = str.match(/(\d+)/g);
  cuts[4] = `${cuts[4]}0`;
  cuts[1] = `${cuts[1] - 1}`;
  return new Date(...cuts).getTime();
}

/**
 * 根据时间戳返回对应日期时间
 * unixToTime(1473836400000)  =>  "2016/9/14 15:00"
 */
export function unixToTime(time) {
  time = parseInt(time, 10);

  const date = new Date(time);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1 < 10 ? 0 : ''}${date.getMonth() + 1}`; // 小于10补零
  const day = `${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  const hours = `${date.getHours() < 10 ? 0 : ''}${date.getHours()}`;
  const minutes = `${date.getMinutes() < 10 ? 0 : ''}${date.getMinutes()}`;

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}


