import * as _ from "lodash";

// 点位
type Point = [number, number];

// 函数参数
interface obtainAroundBatchBlankParam {
    // 当前点位
    currentPoint: Point, 
    // 提示数字点位列表
    tipCountList: Array<Point>, 
    // 地雷列表 
    mineList: Array<Point>,
    // 最大x
    xRange: number,
    // 最大y
    yRange: number
}

// 点位类型
enum PointType {
    BLANK = 1,MINE,TIP
}

export default {
    // 获取指定坐标的周围地雷数
    obtainAroundMineCount(point: Point, mineList: Array<Point>) {
        // 总数
        let total = 0;
        // 左上
        total += this.haveMineInTargetPoint([point[0] - 1, point[1] -1], mineList) ? 1 : 0;
        // 上
        total += this.haveMineInTargetPoint([point[0], point[1] -1], mineList) ? 1 : 0;
        // 右上
        total += this.haveMineInTargetPoint([point[0] + 1, point[1] -1], mineList) ? 1 : 0;
        // 左
        total += this.haveMineInTargetPoint([point[0] - 1, point[1]], mineList) ? 1 : 0;
        // 右
        total += this.haveMineInTargetPoint([point[0] + 1, point[1]], mineList) ? 1 : 0;
        // 左下
        total += this.haveMineInTargetPoint([point[0] - 1, point[1] + 1], mineList) ? 1 : 0;
        // 下
        total += this.haveMineInTargetPoint([point[0], point[1] + 1], mineList) ? 1 : 0;
        // 右下
        total += this.haveMineInTargetPoint([point[0] + 1, point[1] + 1], mineList) ? 1 : 0;
        // 返回总数
        return total;
    },
    // 获取指定坐标是否存在地雷
    haveMineInTargetPoint(point: Point, mineList: Array<Point>) {
        return _.findIndex(mineList, (item) => item[0] == point[0] && item[1] == point[1]) > -1
    },
    // 获取两个数间的随机数
    randomIndex(min: number, max:number) {
        return _.random(min, max);
    },
    // 点位相同
    pointEquals(point1: Point, point2: Point) {
        return point1[0] == point2[0] && point1[1] == point2[1];
    },
    // 批量获取周围空白区块(如果自身是数字区块，则返回自身；如果)
    obtainAroundBatchBlank(option : obtainAroundBatchBlankParam) {
        // 初始化最终结果集合，中间处理集合
        const result = [], tmpResult = [];
        // 标记this对象
        const _that = this;
        
        // 获取指定位置区块的类型
        function obtainTargetPointType(point: Point) {
            // 是否是地雷
            return _.find(option.mineList, item => _that.pointEquals(point,item)) 
            ? PointType.MINE 
            : _.find(option.tipCountList, item => _that.pointEquals(point,item)) 
            ? PointType.TIP 
            : PointType.BLANK;
        }
        
        // 处理点位结果集合
        function handleTempResult(point: Point, list: Array<Point>) {
            // 区块类型
            const pointType = obtainTargetPointType([point[0], point[1]]);
            // 判断区块类型
            switch (pointType) {
                // 空白区块
                case PointType.BLANK: {
                    list.push(point);
                };break;
                // 数字区块
                case PointType.TIP: {
                    result.push(point);
                };break;
            }
        }

        // 获取一次结果
        function ovo(list: Array<Point>) {
            // 隐藏的中间结果
            const hideTmpList = [] as Array<Point>;
            // 获取待处理数组的长度
            const listLength = list == null ? 0 : list.length;
            // 遍历列表
            listLength > 0 && list.forEach(item => {
                // 左上
                let currentX = item[0] - 1, currentY = item[1] - 1;
                // 临界值判断
                if (currentX > 0 && currentY > 0) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 上
                currentX = item[0], currentY = item[1] - 1;
                // 临界值判断
                if (currentY > 0) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 右上
                currentX = item[0] + 1, currentY = item[1] - 1;
                // 临界值判断
                if (currentX < option.xRange + 1 &&  currentY > 0) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 左
                currentX = item[0] - 1, currentY = item[1];
                if (currentX > 0) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 右
                currentX = item[0] + 1, currentY = item[1];
                if (currentX < option.xRange + 1) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 左下
                currentX = item[0] - 1, currentY = item[1] + 1;
                if (currentX > 0 && currentY < option.yRange + 1) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 下
                currentX = item[0], currentY = item[1] + 1;
                if (currentY < option.yRange + 1) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 右下
                currentX = item[0] + 1, currentY = item[1] + 1;
                if (currentX < option.xRange + 1  && currentY < option.yRange + 1) {
                    handleTempResult([currentX, currentY], hideTmpList);
                }
                // 放入到最终结果集
                result.push(item);
            });

        }
    }
}