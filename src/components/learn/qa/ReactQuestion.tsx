import Section from "../../section";

// React面试题
export function ReactQuestion() {
    return (
        <>
            <Section title="React和Vue的不同点">
                <p>React更改变量不能触发DOM更新,Vue能够通过监听变量的修改操作能触发DOM重新渲染</p>
                <p>React属性更新后会触发DOM渲染,Vue属性更新后不能触发DOM的更新</p>
            </Section>
            <Section title="React和Vue的相同点">
                <p>两个流行的前端框架，都实现了响应式的功能</p>
                <p>Vue2的组件和React的类组件模式比较相似，Vue3的组合式组件和React的函数式组件比较相似，</p>
            </Section>
            <Section title="React组件的生命周期">
                <p>初始化阶段</p>
                <ol>
                    <li>componentWillMount: render之前最后一次修改状态的机会, 初始化状态时有些复杂的逻辑可以放到这里(只执行一次)</li>
                    <li>render: 渲染函数，指定渲染的逻辑和DOM(属性和状态更新后会重复执行)</li>
                    <li>componentDidMount: render之后并渲染完成真实DOM后触发，请求数据等耗时操作可以放到这里(只执行一次)</li>
                </ol>
                <p>更新阶段</p>
                <ol>
                    <li>getDerivedStateFromProps: React的新生命周期，获取父组件属性和状态更新后执行</li>
                    <li>shouldComponentUpdate： 是否进行React组件更新，用于性能优化</li>
                    <li>render: 创建虚拟DOM</li>
                    <li>getSnapshotBeforeUpdate: React新生命周期，DOM更新前的快照</li>
                    <li>ComponentDidUpdate: DOM更新后要做的回调函数</li>
                </ol>
                <p>销毁阶段</p>
                <ol className="decimal">
                    <li>componentWillUnmount: 组件销毁后，可以清除一些监听器和定时器,提升组件性能</li>
                </ol>
            </Section>
            <Section title="React中组件间的通信方式">
                <p>父子组件间的通信方式</p>
                <ol>
                    <li>父组件传子组件通过属性传递</li>
                    <li>子组件传父组件通过回调(通知)的方式</li>
                </ol>
                <p>非父子组件间的通信方式</p>
                <ol>
                    <li>状态提升：将组件中的需要交互的状态提升到最近的父组件</li>
                    <li>发布订阅模式</li>
                    <li>通过Context</li>
                </ol>
            </Section>
            <Section title="React中的性能优化">
                <dl>
                    <dt>1.shouldComponentUpdate</dt>
                    <dl>控制组件自身或者子组件是否需要更新，尤其是在子组件非常多的情况下，需要进行优化</dl>

                    <dt>2.PureComponent</dt>
                    <dl>
                        <p>PureComponent会帮助你比较新旧props和state，决定shouldComponentUpdate是否返回true或者false。</p>
                        <p>但是状态如果一直变化，就没必要比较。比如计时器组件。</p>
                    </dl>
                </dl>
            </Section>

            <Section title="React中的Hooks">
                <dl>
                    <dt>1.useState</dt>
                    <dl>创建函数式组件自己的内部状态, 是一个记忆函数。</dl>

                    <dt>2.useEffect</dt>
                    <dl>
                        <p>函数式组件不存在自己的生命周期钩子，实现了类似于类组件生命周期函数的作用。useEffect在一个组件内部可以使用多次。</p>
                        <p>第一个参数的作用，1.声明需要执行的副作用；2.组件卸载时对组件进行清理。如事件监听和定时器等。</p>
                        <p>第二个参数的作用：声明依赖, 空数组时useEffect只会执行一次。</p>
                    </dl>

                    <dt>3.useCallback(记忆函数)</dt>
                    <dl>
                        <p>防止函数重新创建，损耗浏览器性能。</p>
                        <p>第一个参数：需要缓存的函数</p>
                        <p>第二个参数：依赖，当依赖变化时函数会重新创建。如果依赖为空，则该函数内部的变量只会使用初始值。</p>
                    </dl>

                    <dt>4.useMemo</dt>
                    <dl>
                        <p>功能类似于Vue的计算属性。</p>
                        <p>与useCallback的唯一区别是：useCallback不会执行的一个参数函数，而是将他返回给你，而useMemo会执行第一个函数并且将函数执行结果返回给你。</p>
                    </dl>

                    <dt>5.useRef</dt>
                    <dl>
                        <ol>
                            <li>获取DOM元素或组件</li>
                            <li>用于保存值，引用唯一对象</li>
                        </ol>
                    </dl>

                    <dt>6.useContext</dt>
                    <dl>
                        <p>根本目的：减少组件层级，基本用途：为消费者组件缩减代码</p>
                    </dl>

                    <dt>7.useReducer</dt>
                    <dl>
                        <p>根本目的：用于非父子组件间的通信，基本用途：外部状态</p>
                        <p>useReducer不要创建多次，因为每一次都会创建新的</p>
                    </dl>

                </dl>
            </Section>
        </>
    );
}