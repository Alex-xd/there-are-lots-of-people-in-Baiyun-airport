/**
 *  存放根mutation
 */
import * as types from './mutation-types';
import constants from '@/utils/constants';

export default {
    [types.CHANGE_LEFTPANEL_SHOW](state){
        state.showLeftPanel = !state.showLeftPanel;
    },
};


