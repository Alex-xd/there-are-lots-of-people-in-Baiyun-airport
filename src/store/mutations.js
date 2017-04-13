/**
 *  存放根mutation
 */
import * as types from './mutation-types';
import constants from '@/utils/constants';

export default {
    [types.CHANGE_HEATMAP_ZOOM](state) {
        state.heatmapZoomed = !state.heatmapZoomed;
    },
    [types.CHANGE_LEFTPANEL_SHOW](state){
        state.showLeftPanel = !state.showLeftPanel;
    },
    [types.UPDATE_SECTION_INFO](state, sectionInfo) {
        for (const key in sectionInfo) {
            if (sectionInfo[key].pNum > constants.sectionSettings[key].warning) {
                sectionInfo[key].state = 1;
            } else if (sectionInfo[key].pNum > constants.sectionSettings[key].danger) {
                sectionInfo[key].state = 2;
            } else {
                sectionInfo[key].state = 0;
            }
        }
        state.sectionInfo = sectionInfo;
    }
};


// sectionInfo = {
//     T1: {
//         name: 'T1 主航站楼',
//         pNum: 0,
//         state: 0 // 0：normal    1：warning   2：danger
//     },

// 各区域临界值设定
// sectionSettings: {
//     T1: {
//         max: 600
//     },
//     W1: {
//         max: 400
//     },
