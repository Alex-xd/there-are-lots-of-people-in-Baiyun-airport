import { Selector } from 'testcafe';

const navBtns = Selector('.navbar .nav');
const heatmapCtrls = navBtns.nth(1);
const ctrlBtn = Selector('.navbar .nav .dropdown-menu li');
const heatMap = Selector('#J_heatmap canvas');
const ctrlPanel = Selector('.panel-container .panel');
const zoomBtn = ctrlPanel.find('header .btn-group-sm .btn');

fixture `测试`
    .page `http://127.0.0.1:8000`;

test('测试热图', async t => {
    await t
        .click(heatmapCtrls)
        .click(ctrlBtn.nth(0))
        .expect(heatMap.exists).ok('启动热图正常')

        .click(heatmapCtrls)
        .click(ctrlBtn.nth(2))
        .expect(heatMap.exists).notOk('停止热图正常')
});
