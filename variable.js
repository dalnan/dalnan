//1.'use strict';
//add in ES 5
//use this for Valine Javascript.
'use strict';

//2.Variable 변경되어질수 있는 변수, rw(read/write)
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

//3.Contant 절대 값이 변하지 않는 수, r(read only)
//favor immutable data type always for a few reasons: 값을 할당한 다음 값이 절대 변하지 않은것을 사용하라
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// immutable data type:premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

//4. Variable Types 자바스크립트 데이터 타입
//primitive(더이상 나눠질수 없는 아이템), single item: number, string, boolean, null, undefiedn, symbol
//object(싱글아이템 묶어 관리), box container
//function, first-class function

const count = 17; // Integer
const size = 17.1; // decimal number
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

// number - speicla numeric values: infinity, -infinity, NaN
const infinity= 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//blgInt (fairly new, don't use it yet)
const bigInt = 123456789n; // over (-2**53)
console.log('value: ${bigInt}, type: ${typeof bigInt}');


//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${brendan}!'  //template literals (string)
console.log('value: ${helloBob}, type: ${typeof helloBob}');
console.log('value: ' + helloBob + ' type: '+typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1;  // false
console.log('value: ${canRead}, type: ${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');

//null
let nothing = null;
console. log('value: ${nothing}, type: $(typeof nothing}');

//undefined
let x;
console.log('value: ${x}, type: $(typeof x}');

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);   //true
console.log('value: ${symbol1.description}, type: ${typeof symbol1}');

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

//5. Dynamic typing: dynamially typed language
let text = 'hello';
console.log(text.charAt(0));  //h
console.log('value: ${text}, type: ${typeof text}');
text = 1;
console.log('value: ${text}, type: ${typeof text}');
text = '7' + 5;
console.log('value: ${text}, type: ${typeof text}');
text = '8' /  '2';
console.log('value: ${text}, type: ${typeof text}');
console.log(text.charAt(0));



