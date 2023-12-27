import { useEffect, useState } from "react";

export default function Page404() {
    // 计时器
    const [seconds, setSeconds] = useState(3);

    useEffect(() => {
        // 触发定时操作
        const timer = setInterval(() => {
            setSeconds(preSeconds => {
                // 计算剩余时间
                let leftTime = preSeconds - 1;
                // 如果剩余时间为0
                if (leftTime <= 0) {
                    clearInterval(timer);
                }
                return leftTime;
            })
        }, 1000);
        // 删除定时器
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="container" style={{height: '100vh', textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>稍后 {seconds} 秒将跳转至首页...</p>
        </div>
    );
    
}