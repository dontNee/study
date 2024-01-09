import * as _ from "lodash";

export default {
    // 获取指定坐标的周围地雷数
    obtainAroundMineCount(point: [x: number, y: number], mineList: Array<[x: number, y: number]>) {
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
    haveMineInTargetPoint(point: [x: number, y: number], mineList: Array<[x: number, y: number]>) {
        return _.findIndex(mineList, (item) => item[0] == point[0] && item[1] == point[1]) > -1
    },
    // 获取两个数间的随机数
    randomIndex(min: number, max:number) {
        return _.random(min, max);
    },
    // 批量获取周围空白区块
    obtainAroundBatchBlank(point: [x: number, y: number], mineList: Array<[x: number, y: number]>) {
        // 初始化结果
        const result = [point];
    }
}