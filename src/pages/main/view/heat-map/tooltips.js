export function initTooltips(heatmapInstance){
    /*  start legend code */
    let legendCanvas = document.createElement('canvas');
    legendCanvas.width = 100;
    legendCanvas.height = 10;
    let min = document.querySelector('#min');
    let max = document.querySelector('#max');
    let gradientImg = document.querySelector('#gradient');
    let legendCtx = legendCanvas.getContext('2d');
    let gradientCfg = {};

    /* legend code end */

    /* tooltip start  */
    let demoWrapper = document.querySelector('.heatmap-wrapper');
    let tooltip = document.querySelector('.tooltip');

    function updateTooltip(x, y, value) {
        // + 15 for distance to cursor
        let transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)';
        tooltip.style.webkitTransform = transl;
        tooltip.innerHTML = value;
    }

    demoWrapper.onmousemove = function (ev) {
        let x = ev.layerX;
        let y = ev.layerY;
        // getValueAt gives us the value for a point p(x/y)
        let value = heatmapInstance.getValueAt({
            x: x,
            y: y
        });
        tooltip.style.display = 'block';
        updateTooltip(x, y, value);
    };
    /* tooltip end */

    demoWrapper.onmouseout = function () {
        tooltip.style.display = 'none';
    };

    return function updateLegend(data) {
        min.innerHTML = data.min;
        max.innerHTML = data.max;
        // regenerate gradient image
        if (data.gradient != gradientCfg) {
            gradientCfg = data.gradient;
            let gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
            for (let key in gradientCfg) {
                gradient.addColorStop(key, gradientCfg[key]);
            }
            legendCtx.fillStyle = gradient;
            legendCtx.fillRect(0, 0, 100, 10);
            gradientImg.src = legendCanvas.toDataURL();
        }
    }
}