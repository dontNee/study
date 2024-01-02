import * as _ from "lodash";
import { ChessState } from "../game/Reversi";

interface InitBoardChessType {
    [ChessState.black]: [],
    [ChessState.white]: []
}

export default {
    // 获取指定点位转换对方的棋子
    // 参数： 坐标， 当前棋子， 棋盘布局
    checkPoint(coordinate: [x: number, y: number], currentChess: ChessState, boardChess: any) {
        // 定义可以转换的结果集
        let result = [] as Array<any>;
        // 我的棋子
        const myChessList = boardChess[currentChess];
        // 对方的棋子
        const taChessList = boardChess[this.taChess(currentChess)];
        // 获取所有的棋子和当前坐标比对
        const areadyExist = _.concat(myChessList, taChessList).filter(item => this.compareCoordinate(item, coordinate));
        // 是否获取到坐标点
        if (areadyExist.length > 0) {
            return result;
        }
        // 左上方向
        for(let x = coordinate[0] - 1, y = coordinate[1] - 1, tmpResult = [] as Array<any>; x >= 1 && y >= 1; x--, y--) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 上方向
        for(let x= coordinate[0], y = coordinate[1] - 1, tmpResult = [] as Array<any>;y >= 1;y--) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 右上方向
        for(let x= coordinate[0] + 1, y = coordinate[1] - 1, tmpResult = [] as Array<any>;x <= 8 && y >= 1; x++, y--) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 左方向
        for(let x = coordinate[0] - 1, y = coordinate[1], tmpResult = [] as Array<any>;x >= 1;x--) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 右方向
        for(let x = coordinate[0] + 1, y = coordinate[1], tmpResult = [] as Array<any>;x <= 8;x++) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 左下方向
        for(let x = coordinate[0] - 1, y = coordinate[1] + 1, tmpResult = [] as Array<any>;x >= 1 && y <= 8;x--, y++) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 下方向
        for(let x = coordinate[0], y = coordinate[1] + 1, tmpResult = [] as Array<any>;y <= 8;y++) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;
        }
        // 右下方向
        for(let x = coordinate[0] + 1, y = coordinate[1] + 1, tmpResult = [] as Array<any>; x <= 8 && y <= 8; x++, y++) {
            // 当前坐标点
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                result = result.concat(tmpResult); 
                break;
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 当前坐标为空点，退出循环
            break;  
        }
        return result;
    },
    // 获取初始化棋盘
    initBoardChess(boardChess?: [Array<any>, Array<any>]) {
        // 获取黑棋
        let blackChess = boardChess && boardChess.length == 2 ? boardChess[0] : [[4,4], [5,5]];
        // 获取白棋
        let whiteChess = boardChess && boardChess.length == 2 ? boardChess[1] : [[4,5], [5,4]];
        // 初始化棋盘
        let initBoardChess = {} as InitBoardChessType;
        // 初始化黑棋
        Reflect.defineProperty(initBoardChess, ChessState.black, {value: blackChess, writable: true, enumerable: true});
        // 初始化白棋
        Reflect.defineProperty(initBoardChess, ChessState.white, {value: whiteChess, writable: true, enumerable: true});
        // 返回
        return initBoardChess;
    },
    // 获取对方棋子
    taChess(myChess: ChessState) {
        return myChess == ChessState.black ? ChessState.white : ChessState.black;
    },
    // 比较两个坐标点是否相等
    compareCoordinate(coordinate1: [x: number, y: number], coordinate2: [x: number, y: number]) {
        if (coordinate1 && coordinate2) {
            // 展开参数1
            const [x, y] = [...coordinate1];
            // 展开参数2
            const [a, b] = [...coordinate2];
            // 返回
            return x == a && y == b;
        }
        // 错误处理
        return false;
    },
    // 计算下一步落点
    computedNextPoints(currentChess: ChessState, boardChess: any, board: Array<any>) {
        // 初始化结果
        const result = [] as Array<any>;
        // 我的棋子
        const myChessList = boardChess[currentChess];
        // 对方的棋子
        const taChessList = boardChess[this.taChess(currentChess)];
        // 遍历棋盘
        board && board.forEach(row => {

            // 按照行遍历
            row.forEach((col: [x: number, y: number]) => {
                this.computedPoint(col, myChessList, taChessList) && result.push(col);
            })

        });
        // 打印结果集
        console.debug("计算落点结果：", result, ChessState[currentChess]);
        return result;
    },
    // 计算点位是否可落
    computedPoint(coordinate: [x: number, y: number], myChessList: Array<any>, taChessList: Array<any>) {
        // 获取所有的棋子和当前坐标比对
        const areadyExist = _.concat(myChessList, taChessList).filter(item => this.compareCoordinate(item, coordinate));
        // 是否获取到坐标点
        if (areadyExist.length > 0) {
            return;
        }
        // 左上
        for (let x = coordinate[0] - 1, y = coordinate[1] - 1, tmpResult = [] as Array<any>; x >= 1 && y >= 1; x--, y--) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 上
        for(let x= coordinate[0], y = coordinate[1] - 1, tmpResult = [] as Array<any>;y >= 1;y--) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 右上
        for(let x= coordinate[0] + 1, y = coordinate[1] - 1, tmpResult = [] as Array<any>;x <= 8 && y >= 1; x++, y--) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 左
        for(let x = coordinate[0] - 1, y = coordinate[1], tmpResult = [] as Array<any>;x >= 1;x--) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 右
        for(let x = coordinate[0] + 1, y = coordinate[1], tmpResult = [] as Array<any>;x <= 8;x++) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 左下
        for(let x = coordinate[0] - 1, y = coordinate[1] + 1, tmpResult = [] as Array<any>;x >= 1 && y <= 8;x--, y++) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 下
        for(let x = coordinate[0], y = coordinate[1] + 1, tmpResult = [] as Array<any>;y <= 8;y++) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
        // 右下
        for(let x = coordinate[0] + 1, y = coordinate[1] + 1, tmpResult = [] as Array<any>; x <= 8 && y <= 8; x++, y++) {
            // 当前遍历的点坐标
            const currentPoint = [x, y];
            // 判断当前遍历的点坐标是否是当前方的棋子
            if (_.find(myChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 如果存在
                if (tmpResult && tmpResult.length) {
                    // 该点符合规则
                    return true;
                }
            }
            // 判断当前遍历的点坐标是否是对方的棋子
            if (_.find(taChessList, (item) => {return item[0] == x && item[1] == y})) {
                // 暂时放入临时坐标列表
                tmpResult.push(currentPoint);
                // 继续下一次循环
                continue;
            }
            // 没有找到点位，跳出本次循环
            break;
        }
    }
}