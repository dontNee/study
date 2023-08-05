import Section from "../../section";

// Java面试题
export function JavaQuestion() {
    return (
        <>
            <Section title="集合的遍历方式">
                <dl>

                    <dt>List和Set集合</dt>
                    <dl>
                        <ol>
                            <li>使用迭代器进行遍历</li>
                            <li>使用增强for进行遍历</li>
                        </ol>
                    </dl>

                    <dt>Map集合</dt>
                    <dl>
                        <ol>
                            <li>通过获取key值集合进行遍历：Map.keySet</li>
                            <li>通过获取value值集合进行遍历: Map.values</li>
                            <li>通过获取键值对集合进行遍历：Map.entrySet</li>
                        </ol>
                    </dl>

                </dl>
                
            </Section>
            <Section title="Java8的新特性">
                <dl>

                    <dt>lambda表达式和函数式接口</dt>
                    <dl>
                        <p>lambda表达式是一个匿名函数，使用它可以写出更简洁更灵活的代码。</p>
                        <p>函数式接口表示只有一个抽象方法的接口, 你可以用lambda来创建函数式接口的实例</p>
                    </dl>

                    <dt>Stream流</dt>
                    <dl>Stream是面向计算的，意味着几乎不占用内存。可以对流进行操作。</dl>

                    <dt>接口允许有默认方法</dt>
                    <dl>允许在类中进行重写</dl>

                </dl>
            </Section>

            <Section title="StringBuilder和StringBuffer的区别">
                <p>StringBuffer是线程安全的，StringBuilder不是线程安全的。</p>
                <p>StringBuffer的性能要低于StringBuilder</p>
                <p>StringBuffer和StringBuilder在操作字符串时不会产生新的对象。</p>
            </Section>
        </>
    );
}