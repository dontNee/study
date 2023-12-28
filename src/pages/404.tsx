import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Page404() {
    // 国际化
    const { t } = useTranslation('zh-log');
    // 路由
    const router = useRouter();
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
                    // 跳转路由
                    router.push('/');
                }
                return leftTime;
            })
        }, 1000);
        // 删除定时器
        return () => {
            // 控制台打印
            console.debug(t('component.lifecycle.destoryed'));
            // 清除定时器
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="container" style={{height: '100vh', textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>稍后 {seconds} 秒将跳转至首页...</p>
        </div>
    );
    
}

export const getStaticProps = async ({ locale }: any) => ({
    props: {
      ...await serverSideTranslations(locale, ['zh-log'])
    },
})