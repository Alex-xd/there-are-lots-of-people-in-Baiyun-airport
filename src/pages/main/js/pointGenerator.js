export default class PointsGenerator {
    constructor(basePoint = {x: 430, y: 406}, maxValue = 10) {
        this.basePoint = basePoint;
        this.maxValue = maxValue;
    }

    genPoints(sectionData, maxPoint = 4) {
        let result = [],
            data = this.getRealPosition(this.basePoint, sectionData);

        data.forEach((el, index, arr) => {
            if (index > 0) {
                let mp = Math.floor(Math.random() * maxPoint);
                for (let i = 0; i < mp; i++) {
                    result.push({ // 生成区块范围内的随机点
                        x: Math.floor(Math.random() * arr[0].width + el.x),
                        y: Math.floor(Math.random() * arr[0].height + el.y),
                        value: Math.floor(Math.random() * this.maxValue)
                    });
                }
            }
        });
        return result
    }

    getRealPosition(basePoint, data) {
        return data.map((el, index, arr) => {
            if (index < 1) {
                return {
                    width: el.width,
                    height: el.height
                }
            } else {
                return {
                    x: basePoint.x + el.x,
                    y: basePoint.y + el.y
                }
            }
        })
    }
}
