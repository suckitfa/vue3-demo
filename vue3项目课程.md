### 后端文档

http://api.vikingship.xyz/public/swagger/index.html

### 课程笔记

http://docs.vikingship.xyz/typescript.html#%E5%AE%89%E8%A3%85-typescript



### Vu2的问题：

随着功能的增长，复杂组件的代码变得难以维护。

### mixin的解决方案问题：

1. 命名冲突
2. 不清楚暴露出来的变量作用
3. 重用到其他的compoent经常用到问题。

### composition API





### 开发工具

- ESLint 代码规范校验，提高代码的质量
- Vetur
- 提供API的站点： https://dog.ceo/dog-api/


### ref
- ref
- setup()
传入原始类型，变为响应式的对象


### 将对象中的值取出后，丧失了响应式的特性。使用toRefs保证为响应式的结构。

### 响应式的核心
vue2: Object.defineProperty
```js
Object.definePropery(data,'count',{
    get() {}
    set() {}
})
```
vue3: Objecgt.proxy
> 更高维度的拦截,不用关心具体的属性
```js
new Proxy({
    get(key){},
    set(key){},
})
```

### 声明周期
> 组件从出生到死亡的一些过程
- setup
- beforeCreate
- create
- beforeMount
- mounted
- beforeUpdate
- updated
> 语义化，更加形象
- beforDestroy => beforeUnMount
- destroyed => unmounted



### 声明周期函数两个版本的对应

| Vue2          | Vue3              |      |
| ------------- | ----------------- | ---- |
| beforeCreated | **use setup()**   |      |
| created       | **use setup()**   |      |
| beforeMount   | onBeforeMount     |      |
| mounted       | onMounted         |      |
| beforeUpdate  | onBeforeUpdate    |      |
| updated       | onUpdated         |      |
| beforeDestory | onBeforeUnMounted |      |
| destoryed     | onUnMounted       |      |
| activated     | onActivivated     |      |
| deactivated   | onDeactivated     |      |
| errorCaputred | onErrorCapatured  |      |

- onRenderTracked
- onRenderTriggered


### hooks提取公共逻辑
### typescript中的泛型对hooks
### Vue3中的defineComponent对typescript的加强

![image-20211011210102059](/Users/bobtang/Library/Application Support/typora-user-images/image-20211011210102059.png)


### Teleport

![image-20211011210250399](/Users/bobtang/Library/Application Support/typora-user-images/image-20211011210250399.png)
- Dialog被包裹在其他组件之中，容易被干扰。
- 样式也在其他组件中，容易变得非常混淆
- ![image-20211011210514798](/Users/bobtang/Library/Application Support/typora-user-images/image-20211011210514798.png)

借助teleport让modal渲染在app同一级的modal中

![image-20211011211551002](/Users/bobtang/Library/Application Support/typora-user-images/image-20211011211551002.png)

### emits明确显示组件的自定义事件

### Suspense 支持异步组件，要返回一个promise
- 异步请求的困境