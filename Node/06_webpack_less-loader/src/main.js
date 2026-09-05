import { sum } from './utils/math'
import "./component/cpn"

const message = "Hello World"


console.log(message.length)
console.logs(sum(10,20))
console.logs(sum(20,30))

const bar = () => {
    console.log("bar function execution~")
}

bar()
bar() 