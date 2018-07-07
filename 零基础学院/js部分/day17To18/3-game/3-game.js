/* ***
 * 3的小游戏；
 * 从1到100，以此在console输出各数字，但是，当数字为3的倍数或者含有3的时候，输出“PA”
 * ***/
for (let i=1; i <= 100; i++) {
    if (i%3) {
        console.log(i)
    } else {
        console.log('PA')
    }
}