- Basic JavaScript (JS)
### Hello world
```javascript
console.log("Hello World");
```
<details>
  <summary>🟢 Terminal</summary>

```javasript
Hello world!
```
</details>

---
<br/><br/>

- Variables, Constant and usage
### ES5 
``` javascript
var name1 = 'Quan';
```

### ES6
```javascript
const PI = 3.14;
let count = 1;
console.log(count);
count = 2; // works
console.log(count);
const name2 = 'Cybozu';
console.log(name2);
        // name2 = 'Testing'; // error Assignment to constant variable

    + Operators
const result = 1 + (2 + -2) * 3 - +"3";
const grade = mark > 8 ? 'GOOD' : mark > 5 ? 'OK' : 'BAD';
const count1 = 1;
const negativeCount = -count; // -1
let idx1 = 1;
const incrementPrefix = ++idx; // 2
let idx2 = 1;
const incrementSuffix = idx++; // 1
const quantity = +'2'; // number 2
const isValid = !true; // false

    + Data types
const age = 18;
const name = 'Quan';
const isActive = true;
const student = {
 name: 'Po',
 age: 18,
}
let powerfulVar; // count will be undefined
powerfulVar = 1;
powerfulVar = 'Hello';
powerfulVar = true;
powerfulVar = null
powerfulVar = undefined
powerfulVar = {
 name: 'crazy javascript'
};
```
---
<br/><br/>
- Working with String
```javascript
'Quan'.charAt(0); // Q
'Cybozu'.charAt(3); // o
const name3 = 'To Minh Quan';
name3.charAt(name3.length - 1); // n(the last character)

''.concat('Easy'); // 'Easy'
''.concat('Easy', ' ', 'peasy'); // 'Easy peasy'

'a'.padStart(5, '*'); // ****a
'ab'.padStart(5, '*'); // ***ab
'abc'.padStart(5, '*'); // **abc
'a'.padEnd(5, '*'); // a****
'ab'.padEnd(5, '*'); // ab***
'abc'.padEnd(5, '*'); // abc**

'*'.repeat(5); // *****
' Cybozu '.trim(); // 'Cybozu'
' Cybozu '.trimStart(); // 'Cybozu '
' Cybozu '.trimEnd(); // ' Cybozu'

'Cybozu'.toLowerCase(); // cybozu
'Cybozu'.toUpperCase(); // CYBOZU

'Cybozu'.indexOf(o) // 3
'Cybozuozu'.lastIndexOf(o) // 6

const name4="Cybozu in my heart"
name4.startsWith('cybozu'); // false
name4.startsWith('Cybozu'); // true
name4.startsWith('in'); // false

name4.includes('Cybozu'); // true
name4.includes('in'); // true
name4.includes('heart'); // true

name4.endsWith('heart'); // true
name4.endsWith('in'); // false
name4.endsWith('Heart'); // false

name4.slice(0,3); // Cyb

name4.replace(' ','-'); // 'Cybozu-in my heart'

name4.split(' '); // ['Cybozu', 'in', 'my', 'heart']
['Ga','roon'].join(''); // Garoon
```
---
<br/><br/>

- Working with Array
```javascript
const studentList = [
    { id: 1, name: 'Van A' },
    { id: 2, name: 'Thi B' },
    { id: 3, name: 'Van C' },
];

const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, false]
];

const mixedList = [
    1, 
    2, 
    'word', 
    true, 
    null, 
    undefined, 
    { id: 1, name: 'Easy' }, 
    [1, 2, 3]
];

const [one, two, three] = [3, 5, 7, 9, 11];
const [first, second, third, ...rest] = [3, 5, 7, 9, 11];
console.log(rest); // [9, 11]

const numberList = [1, 2, 3];
const anotherList = numberList; // the true syntax is const anotherList = [...numberList];
anotherList[0] = 4; // anotherList = [4, 2, 3]
console.log(numberList); // [4, 2, 3] 

[1,2,3].push(4, 5); // [1,2,3,4,5]
const lastNum = [1,2,3].pop(); // 3

[1,2,3].unshift(0); // [0,1,2,3]
[1,2,3].shift(); // 1

const numberList5 = [3, 5, 7]; 
numberList5.splice(0, 0, 2, 4);
console.log(numberList5) // [2,4,3,5,7]

[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true

[1, 2, 4].some((x) => x % 2 === 0); // true
[1, 3, 5].some((x) => x % 2 === 0); // false

[1, 1, 1].indexOf(1); // 0
[1, 1, 1].lastIndexOf(1); // 2

['Cy','Bo','Zu'].indexOf('Bo'); // 1
['Cy','Bo','Bo'].lastIndexOf('Bo'); // 2

['Cy','Bo','Zu'].includes('Zu'); // true
['Garoon'].includes('Zu'); // false

[2, 1, 3].find(x => x % 2 === 0); // 2
[2, 1, 3].findIndex(x => x % 2 === 0); // 0

[1, 3, 5, 2, 7].filter(x => x % 2 === 0); // [2]
[1, 3, 5, 2, 7].filter(x => x > 2); // [3, 5, 7]
[1, 3, 5, 2, 7].filter(x => x <= 10 || x % 5 === 0); // [5]

[null, 2, 1, 5, 3, undefined, null].sort(); // [1, 2, 3, 5, null, null,undefined]

[2,4,6].reduce((sum, number) => sum + number); // 12 

    // Array Object
Array.isArray(123); // false
Array.isArray('Cybozu'); // false
Array.isArray(true); // false
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
[null, undefined].fill(false); // [false, false]
Array(5).fill(1); // [1, 1, 1, 1, 1]
['Cybo', 'zu'].join('-'); // 'Cybo-zu'
[1, 2, 3].reserve(); // [3, 2, 1]
```
---
<br></br>

- Working with if…else
```javascript
if (n > 0 && n % 2 === 0) isValid = true; // Check if the positive num / 2
else isValid = false;
```
### using switch...case
```javascript
function printMonth(n) {
    let month = '';
    switch (n) {
    case 1: {
    month = 'Jan';
    break;
    }
    
    case 2: {
    month = 'Feb';
    break;
    }
    
    case 3: {
    month = 'Mar';
    break;
    }
    
    // ... similar for month 4 -> 11
    
    case 12: {
    month = 'Dec';
    break;
    }
    default: {
    month = 'Invalid number'
    }
    }
    return month;
   }
```
---
<br></br>

- Working with For loop
### before ES5
```javascript
const numberList2 = [2, 4, 6];
for (let i = 0; i < numberList2.length; i++) {
 const number = numberList2[i];
 console.log(number); // 2, 4, 6
}
```
### ES5 ForEach
```javascript
const numberList3 = [2, 4, 6];
numberList3.forEach(x => console.log(x)); // 2, 4, 6
```
### ES5 for...of
```javascript
const numberList4 = [2, 4, 6];
for (const number of numberList4) {
 console.log(number); // 2, 4, 6
}
```
### for...in
```javascript
const Object = {
    name: "quan",
    age: "21"
};
let text ="";
for (let x in Object){
    text += Object[x] + " "
}
```
<details>
  <summary>🟢 Terminal</summary> 
  
```javasript
quan 21
```
</details>

---
<br></br>

- Working with function
```javascript
function sumTwoPositive(a, b) {
    if (a <= 0 || b <= 0) return -1; 
    return a + b;
   }
```

---
<br></br>

- Object Literals and JSON
```javascript
var a = 1,
    b = 2,
    c = 3;

let obj = { a, b, c };

console.log(obj); // { "a" : 1, "b" : 2, "c" : 3 }

var nameField = 'name';
var P = 'price';
var n = 'name';
var p = 'price';

const info = {
    n,
    p,
    getName(){
        return n;
    }
}

const course ={
    [nameField]: "Garoon",
    [P]: 2000
}

const employee = { id: 1, name: 'ToMinhQuan', age: undefined }
JSON.stringify(employee); // '{"id": 1, "name": "ToMinhQuan" }'

JSON.parse('123'); // 123
JSON.parse('true'); // true
JSON.parse('null'); // null
JSON.parse('{}'); // {}
JSON.parse('[]'); // []

JSON.parse('0123'); // Syntax Error
JSON.parse('NaN'); // Syntax Error
JSON.parse('Infinity'); // Syntax Error

JSON.parse("{ 'id': 123 }"); // Syntax Error
JSON.parse('{ "id": 123 }'); // { id: 123 } it works

JSON.parse('[1, 2, 3, 4, ]'); // Syntax Error
JSON.parse('{"foo" : 1, }'); // Syntax Error
```
---
<br></br>

- Class and constructor
```javascript
class Phone {
    constructor(brand,year){
        this.brand = brand;
        this.year = year; 
    }
    showInfo = () =>{
        console.log(`This phone is ${this.brand} - ${this.year}`);
    }
};

class Owner extends Phone {
    constructor(brand,year,name){
        super(brand,year);
        this.name = name;
    }
    getInfo = () =>{
        console.log(`${this.name} owned this phone, it is ${this.brand} - ${this.year}`);
    }
} 

const quan = new Owner('Iphone','14ProMax','QuanTo')
quan.showInfo();
quan.getInfo();
```
<details>
  <summary>🟢 Terminal</summary> 
  
```javasript
This phone is Iphone - 14ProMax
QuanTo owned this phone, it is Iphone - 14ProMax
```
</details>

- Tìm hiểu ở mức cơ bản về Async / Await
```javascript
const PromiseTest = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(1)
    },4000);
})  


let printnumb = async ()=>{
    let num1 = await PromiseTest;
    console.log(num1);
    setTimeout(()=>{
        console.log(2);
    },3000)
    console.log(3);
}

printnumb();
```
<details>
  <summary>🟢 Terminal</summary> 
  
```javasript
1
3
2
```
</details>

