const customLogic = (acc, fnc) => {
    return fnc(acc)
}
const compose = (...rest) => x => {
    return rest.reduce(customLogic, x)
}

const fun1 = num => num + 1;
const fun2 = num => num * 2;
const fun3 = num => num + 2;
const fun4 = num => num / 2;

const result = compose(fun1, fun2, fun3, fun4)(10)
console.log(result)
