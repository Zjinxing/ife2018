* yarn install
* yarn dev

    [项目地址](https://zjinxing.github.io/ife2018/%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%AD%A6%E9%99%A2/js%E9%83%A8%E5%88%86/day39to41/pushState/dist/index.html)  
    
    这个demo是使用pushstate实现的，思路跟通过hash实现差不多，首先页面在最初加载完成时判断location.search是否存在，如果不存在则根据checkbox状态替换一条历史记录，如果存在则根据location.search设置checkbox状态，并渲染页面，然后每个checkbox点击时都会重设checkbox状态，并新增一条历史记录，另外再给window添加一个onpopstate事件监听即可