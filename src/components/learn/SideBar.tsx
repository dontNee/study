import styles from "@/styles/sidebar.module.scss";

export default function SideBar({ handleActiveMenuChange }: any) {

    // 处理侧边栏点击事件
    function handleSideBarClick(props: any) {
        // 处理
        handleActiveMenuChange(props);
    }

    return (
        <div className={ `${styles.sidebar} d-none d-lg-block p-4 position-sticky left-0` }>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link disabled">前端面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "前端面试题",
                    subTitle: "前端通用面试题",
                    questionType: "Front"
                })}>
                    <a className="nav-link active" aria-current="page" href="#">前端通用面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "前端面试题",
                    subTitle: "React面试题",
                    questionType: "react"
                })}>
                    <a className="nav-link" href="#">React面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "前端面试题",
                    subTitle: "Vue面试题",
                    questionType: "vue"
                })}>
                    <a className="nav-link" href="#">Vue面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "前端面试题",
                    subTitle: "构建工具面试题",
                    questionType: "build"
                })}>
                    <a className="nav-link" href="#">构建工具面试题</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">后端面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "后端面试题",
                    subTitle: "Java面试题",
                    questionType: "java"
                })}>
                    <a className="nav-link" href="#">Java面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "后端面试题",
                    subTitle: "数据库面试题",
                    questionType: "db"
                })}>
                    <a className="nav-link" href="#">数据库面试题</a>
                </li>
                <li className="nav-item" onClick={() => handleSideBarClick({
                    title: "后端面试题",
                    subTitle: "分布式系统面试题",
                    questionType: "distributed"
                })}>
                    <a className="nav-link" href="#">分布式系统面试题</a>
                </li>
            </ul>
        </div>
    );
}