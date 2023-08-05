import { io } from "socket.io-client"

// 建立连接
function createConnect(socketUrl?: any) {
    // 创建一个socket
    const socket = io(socketUrl, {
        autoConnect: false,
        withCredentials: true,
    });
    // 返回创建的socket
    return socket;
}

// 聊天socket
export const chatSocket = createConnect(`http://fengfengyun.cn`);