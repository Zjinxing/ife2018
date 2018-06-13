* yarn install
* yarn dev

    [项目地址](https://zjinxing.github.io/ife2018/零基础学院/js部分/day39to41/hash/dist/index.html)  
    这个是用直接操作hash的方式实现的，实现思路如下：  
    > 1 . 首先判断location.hash是否存在，如果不存在，则根据checkbox的状态设置hash，如果存在，则根据hash设置checkbox状态并重新渲染页面  
    2 . 每次checkbox被点击之后重新根据checkbox的状态设置新的hash  
    3 . 添加hashchange事件监听，hash变化时根据hash渲染页面