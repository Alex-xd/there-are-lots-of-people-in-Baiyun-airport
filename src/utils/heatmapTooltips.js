export default function initTooltips(heatmapInstance) {
    /*  start legend code */
    const legendCanvas = document.createElement('canvas');
    legendCanvas.width = 100;
    legendCanvas.height = 10;
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');
    const gradientImg = document.querySelector('#gradient');
    const legendCtx = legendCanvas.getContext('2d');
    let gradientCfg = {};

    /* legend code end */

    /* tooltip start  */
    const demoWrapper = document.querySelector('.heatmap-wrapper');
    const tooltip = document.querySelector('.tooltip');

    function updateTooltip(x, y, value) {
        // + 15 for distance to cursor
        const transl = `translate(${x + 15}px,${y + 15}px)`;
        tooltip.style.webkitTransform = transl;
        tooltip.innerHTML = value;
    }

    demoWrapper.onmousemove = function (ev) {
        const x = ev.layerX;
        const y = ev.layerY;
        // getValueAt gives us the value for a point p(x/y)
        const value = heatmapInstance.getValueAt({
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
        if (data.gradient !== gradientCfg) {
            gradientCfg = data.gradient;
            const gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
            for (const key in gradientCfg) {
                if (gradientCfg.hasOwnProperty(key)) {
                    gradient.addColorStop(key, gradientCfg[key]);
                }
            }
            legendCtx.fillStyle = gradient;
            legendCtx.fillRect(0, 0, 100, 10);
            gradientImg.src = legendCanvas.toDataURL();
        }
    }
}
