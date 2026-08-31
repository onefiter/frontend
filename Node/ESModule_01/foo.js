// 3.导出方式三
export const name = "dw"
export const age = 18

export function sayHi() {
    console.log("hi")
}

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log("hi")
    }
}
/*
// 导出方式一

export { name, age, sayHi, Person }
*/
/*
// 导出方式二： 导出时给标识符起一个别名
export const gender = "male"
export function sayHello() {
    console.log("hello")
}
*/ 