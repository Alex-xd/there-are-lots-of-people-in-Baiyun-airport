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


