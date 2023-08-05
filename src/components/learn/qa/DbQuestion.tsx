import Section from "../../section"

// 数据库面试题
export function DbQuestion() {

    
    return (
        <>
            <Section title={"MySQL中的索引类型有哪些？有什么区别？"}>
                <p>InnoDB：支持事务和外键</p>
                <p>MyISAM: 无法处理事务，适合存储日志数据。</p>
            </Section>
            <Section title={`Mybatis中#和$符号的区别`}>
                <p>在处理后会被替换为一个占位符，也就是`$`,能够防止SQL注入的风险</p>
                <p>直接替换SQL,适用于无法进行文本替换的场合</p>
            </Section>
            <Section title={"事务的四大特性"}>
                <p>原子性：事务要么全部完成，要不全不执行</p>
                <p>一致性：事务前后的数据必须一致，即A账户和B账户的数据在进行事务操作后要逻辑上一致</p>
                <p>隔离性：事务之间不能相互影响</p>
                <p>持久性：事务一旦提交，他对数据库中的数据的改变就是永久性的</p>
            </Section>
        </>
    );
}