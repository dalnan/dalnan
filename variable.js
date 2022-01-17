//1.'use strict';
//add in ES 5
//use this for Valine Javascript.
'use strict';

//2.Variable 변경되어질수 있는 변수
//let (added in ES6) 
//Block scope, global scope(어느곳에나 접근 가능,최소한,필요한 부분에만 정의)
let globalName = 'global name';
{
    let name = 'jia';
    console.log(name);
    name = 'jw';
    console.log(name);
}
console.log(globalName);

//var (hoisting:항상 위로 끌어올려주다) 더이상 쓰면안됨 let쓰기