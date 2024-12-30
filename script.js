slowMath.add(6, 2)

.then((result)=>{

    console.log(result)

    return slowMath.multiply(result, 2)

})

.then((multiResult)=>{

    console.log(multiResult)

    return slowMath.divide(multiResult, 4)

})

.then((divideResult)=>{

    console.log(divideResult)

    return slowMath.subtract(divideResult, 3)

})

.then((subtractResult)=>{

    console.log(subtractResult)

    return slowMath.add(subtractResult, 98)

})

.then((addResult)=>{

    console.log(addResult)

    return slowMath.remainder(addResult, 2)

})

.then((remainderResult)=>{

    console.log(remainderResult)

    return slowMath.multiply(remainderResult, 50)

})

.then((multiplyResult)=>{

    console.log(multiplyResult)

    return slowMath.remainder(multiplyResult, 40)

})

.then((remainderResult)=>{

    console.log(remainderResult)

    return slowMath.add(remainderResult, 32)

})

.then((finalResult)=>{

    console.log(finalResult)

})

.catch((err)=>{

console.error(err)

})



async function finalResult() {

    try {

        let result = await slowMath.add(6, 2)

        console.log(result)

        result = await slowMath.multiply(result, 2)

        console.log(result)

        result = await slowMath.divide(result, 4)

        console.log(result)

        result = await slowMath.subtract(result, 3)

        console.log(result)

        result = await slowMath.add(result, 98)

        console.log(result)

        result = await slowMath.remainder(result, 2)

        console.log(result)

        result = await slowMath.multiply(result, 50)

        console.log(result)

        result = await slowMath.remainder(result, 40)

        console.log(result)

        result = await slowMath.add(result, 32)

        console.log(result)

    }



    catch (err) {

        console.log(err)

    }

}



finalResult()