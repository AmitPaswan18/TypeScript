// Generics in Ts
function numbers<T>(array: T[]) {
    return array[0]
}
const newArray = [1, 2, 3, 4, 5]
const SeccondArray = ["a", " b", "c", "d"]

let value = numbers(newArray)
let Secondvalue = numbers(SeccondArray)
console.log(value);
console.log(Secondvalue)

type Data<T> = {
    name: string
    age: number
}

const response: Data<{ name: string }> = {
    name: "Amit",
    age: 30
}

export { }