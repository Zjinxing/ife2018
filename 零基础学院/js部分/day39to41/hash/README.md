* yarn install
* yarn dev

    [项目地址](https://zjinxing.github.io/ife2018/%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%AD%A6%E9%99%A2/js%E9%83%A8%E5%88%86/day37To38/dist/index.html)  
    这个是用直接操作hash的方式实现的，实现思路如下：  
    > 1 . 首先判断location.hash是否存在，如果不存在，则根据checkbox的状态设置hash，如果存在，则根据hash设置checkbox状态并重新渲染页面  
    2 . 每次checkbox被点击之后重新根据checkbox的状态设置新的hash  
    3 . 添加hashchange事件监听，hash变化时根据hash渲染页面