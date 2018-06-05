// 初始化页面
createCheckbox(items1, regionCheck, "regall");
createCheckbox(items2, productCheck, "proall");
getData();
createTable();
mergeCell(1, 0);
choose(regionCheck, "regall");
choose(productCheck, "proall");

// 添加事件监听
regionCheck.addEventListener("click", getData, false);
regionCheck.addEventListener("click", createTable, false);
regionCheck.addEventListener("click", changeTd, false);
regionCheck.addEventListener("click", function () {
    mergeCell(1, 0);
}, false);
productCheck.addEventListener("click", getData, false);
productCheck.addEventListener("click", createTable, false);
productCheck.addEventListener("click", changeTd, false);
productCheck.addEventListener("click", function () {
    mergeCell(1, 0)
}, false);