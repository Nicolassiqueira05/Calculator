const keys = {
    zero: document.querySelector("#key-0"),
    one: document.querySelector("#key-1"),
    two: document.querySelector("#key-2"),
    three: document.querySelector("#key-3"),
    four: document.querySelector("#key-4"),
    five: document.querySelector("#key-5"),
    six: document.querySelector("#key-6"),
    seven: document.querySelector("#key-7"),
    eight: document.querySelector("#key-8"),
    nine: document.querySelector("#key-9"),
    add: document.querySelector("#key-add"),
    sub: document.querySelector("#key-sub"),
    multi: document.querySelector("#key-multi"),
    div: document.querySelector("#key-div"),
    equal: document.querySelector("#key-equal"),
    output: document.querySelector("#output"),
    clean: document.querySelector("#key-clean")
}

let num
let num2
let result

let calcKey

let choosefunc = false

keys.zero.addEventListener("click", ()=>{numbersInput("0")})
keys.one.addEventListener("click", ()=>{numbersInput("1")})
keys.two.addEventListener("click", ()=>{numbersInput("2")})
keys.three.addEventListener("click", ()=>{numbersInput("3")})
keys.four.addEventListener("click", ()=>{numbersInput("4")})
keys.five.addEventListener("click", ()=>{numbersInput("5")})
keys.six.addEventListener("click", ()=>{numbersInput("6")})
keys.seven.addEventListener("click", ()=>{numbersInput("7")})
keys.eight.addEventListener("click", ()=>{numbersInput("8")})
keys.nine.addEventListener("click", ()=>{numbersInput("9")})

keys.add.addEventListener("click", ()=>{calcKey = "add";choosefunc = true; output()})
keys.sub.addEventListener("click", ()=>{calcKey = "sub";choosefunc = true; output()})
keys.multi.addEventListener("click", ()=>{calcKey = "multi";choosefunc = true; output()})
keys.div.addEventListener("click", ()=>{calcKey = "div";choosefunc = true; output()})

keys.clean.addEventListener("click", ()=>{clean()})
keys.equal.addEventListener("click", ()=>{calc(); outputResult()})



function numbersInput(value){
    if(choosefunc == false){
        firstNum(value)
        output()
    }else{
        secondNum(value)
        output()
    }
}

const firstNum = (value) =>{
    if(num == undefined){
        num = value
        console.log(num)
    }else{
        num = num + value
        console.log(num)
    }
}
const secondNum = (value) =>{
    if(num2 == undefined){
        num2 = value
        console.log(num2)
    }else{
        num2 = num2 + value
        console.log(num2)
    }
}
const clean = () =>{
    num = null
    num2 = null
    result = null
    calcKey = null
    choosefunc = false 
    keys.output.innerText = "0"
}

const output = () =>{
    if(choosefunc == false){
        keys.output.innerText = num
    }else if(num2 == null){
        switch (calcKey) {
            case "add":
                keys.output.innerText = num + " + "
                break
            case "sub":
                keys.output.innerText = num + " - "
                break
            case "div":
                keys.output.innerText = num + " / "
                break
            case "multi":
                keys.output.innerText = num + " * "
                break    
            default:
                break
        }
    }else{
        switch (calcKey) {
            case "add":
                keys.output.innerText = num + " + " + num2
                break
            case "sub":
                keys.output.innerText = num + " - " + num2
                break
            case "div":
                keys.output.innerText = num + " / " + num2
                break
            case "multi":
                keys.output.innerText = num + " * " + num2
                break    
            default:
                break
        }
    }
}

const outputResult = () =>{
    keys.output.innerText = result
}

const calc = () =>{
    num = parseInt(num, 10)
    num2 = parseInt(num2, 10)
    switch (calcKey) {
        case "add":
            result = num + num2
            console.log(result)
            break
        case "sub":
            result = num - num2
            console.log(result)
            break
        case "div":
            result = num / num2
            console.log(result)
            break
        case "multi":
            result = num * num2
            console.log(result)
            break    
        default:
            break
    } 
}