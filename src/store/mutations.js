/**
 *  存放根mutation
 */
import * as types from './mutation-types';
import constants from '@/utils/constants';

export default {
    // 更新数据
    [types.UPDATE_DATA](state, data) {
        // 计算获得各区域状态
        const secInfo = data.sectionInfo;
        for (const key in secInfo) {
            if (secInfo.hasOwnProperty(key)) {
                if (secInfo[key].pNum >= constants.sectionSettings[key].danger) {
                    secInfo[key].state = 2;
                } else if (secInfo[key].pNum >= constants.sectionSettings[key].warning) {
                    secInfo[key].state = 1;
                } else {
                    secInfo[key].state = 0;
                }
            }
        }

        state.data.shift();
        state.data.push({
            timeStamp: data.timeStamp,
            points: data.points,
            sectionInfo: secInfo
        });
    },
    // 初始化数据  // 2016/09/14 15:00 ~ 2016/09/14 20:50  共36组数据
    [types.INIT_DEFAULT_DATA](state, defaultData){
        state.data = defaultData;
    }
};
