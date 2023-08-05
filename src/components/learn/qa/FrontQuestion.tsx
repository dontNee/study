import Section from "../../section";

// 前端通用问题
export function FrontQuestion() {

    return (
        <>
            <Section title="如何快速删除数组中的指定位置的元素">
                <p>
                    JavaScript数组中的splice() 方法向/从数组添加/删除项目，并返回删除的项目。
                </p>
            </Section>
            <Section title="函数闭包的作用">
                <p>
                    应用场景：设计一个计数器组件
                </p>
                <p>
                    首先，函数的作用是将一块代码进行封装。这种函数没有自己内部的状态，每一次执行的结果（不访问外界变量的情况下）都是一样的。
                    闭包，可以让函数拥有自己的状态，不会被外界改变。
                </p>
            </Section>
            <Section title="前端用到了哪些设计模式">
                <dl>
                    <dt>行为型设计模式：观察者模式(发布订阅模式)</dt>
                    <dl>应用场景: Vue响应式原理的核心机制， 前端事件监听</dl>

                    <dt>结构性设计模式：代理模式</dt>
                    <dl>应用场景：Vue的响应式原理的核心机制, Proxy</dl>

                    <dt>建造型设计模式：单例模式</dt>
                    <dl>应用场景：Vuex，JQuery, Redux</dl>
                </dl>
            </Section>

            <Section title="使用Reflect反射的优势">
                <dl>
                    
                    <dt>Reflect apply</dt>
                    <dl>使代码更简洁易懂</dl>
                </dl>
            </Section>
        </>
    );
}