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