import styles from "@/styles/breadcrumb.module.css"

export default function BreadCrumb({ title, subTitle }: any) {

    return (
        <nav className={styles["breadcrumb-nav-cls"]} aria-label= "breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    {title}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {subTitle}
                </li>
            </ol>
        </nav>
    );
}