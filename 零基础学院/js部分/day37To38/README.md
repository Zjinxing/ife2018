* yarn install
* yarn dev

    [项目地址](https://zjinxing.github.io/ife2018/%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%AD%A6%E9%99%A2/js%E9%83%A8%E5%88%86/day37To38/dist/index.html)  
    这里使用localStorage存储sourceData时踩了一个坑，一开始直接使用localStorage.setItem("data",sourceData),发现报错，在控制台console了一下发现输出的结果是[[object object][object object][object object][object object]...],又看了一下MDN的例子：  
    >localStorage.setItem('myCat', 'Tom');  
      
    意思是访问了访问了storage对象并增加了一个数据项，数据项是字符串形式,而sourceData是一个数组，于是就需要用到stringify()和parse(),这两个方法分别是将JavaScript对象序列化为JSON字符串和把JSON字符串解析为原生JavaScript值  
    于是存储和读取sourceData分别就是：  
    >localStorage.setItem("data",JSON.stringify(sourceData));  
     JSON.parse(localStorage.getItem("data"));