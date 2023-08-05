import PageContent from "@/components/learn/PageContent";
import SideBar from "@/components/learn/SideBar";
import { 
    FrontQuestion, 
    ReactQuestion, 
    VueQuestion, 
    BuildQuestion, 
    JavaQuestion, 
    DbQuestion, 
    DistributedQuestion 
} from "@/components/learn/qa/Qa"
import { useState } from "react";

export default function Learn() {

    // 设置状态
    const [activeMenu, setActiveMenu] = useState({title: "前端面试题", subTitle: "前端通用面试题", questionType: <FrontQuestion />});

    // 处理侧边菜单点击事件
    function handleActiveMenuChange(props: any) {
        // 获取问题字串
        let questionType = null;
        // 获取问题组件
        switch(props.questionType) {
            case "Front": 
                questionType = <FrontQuestion />; break;
            case "react": 
                questionType = <ReactQuestion />; break;
            case "vue": 
                questionType = <VueQuestion />; break;
            case "build": 
                questionType = <BuildQuestion />; break;
            case "java": 
                questionType = <JavaQuestion />; break;
            case "db": 
                questionType = <DbQuestion />; break;
            case "distributed": 
                questionType = <DistributedQuestion />; break;
            default:
                questionType = <FrontQuestion />;
        }
        setActiveMenu({
            ...props,
            questionType: questionType
        })
    };

    return (
        <div className="pt-1" style={{display: 'flex'}}>
        <SideBar handleActiveMenuChange={handleActiveMenuChange}/>
        <PageContent title={activeMenu.title} subTitle={activeMenu.subTitle}>
            {activeMenu.questionType }
        </PageContent>
        </div>
    );
}