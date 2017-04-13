/**
 *  存放根mutation
 */
import * as types from './mutation-types';

export default {
    [types.CHANGE_HEATMAP_ZOOM](state) {
        state.heatmapZoomed = !state.heatmapZoomed;
    },
    [types.CHANGE_LEFTPANEL_SHOW](state){
        state.showLeftPanel = !state.showLeftPanel;
    }
};
