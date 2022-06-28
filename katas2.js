// comece a criar a sua função add na linha abaixo

add()

function add(a,b){
    return a+b
}

// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(p,q){
    let controleMult = 0
    for(let i = 0; i < p; i++){
        controleMult += add(0,q)
    }

    return controleMult
}


// descomente a linha seguinte para testar sua função

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x,y){
    let pot = 1
    for(let i = 0; i < y; i++){
        pot = multiply(x, pot)
    }

    return pot
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(numb){
    let result = 1 
    for(let i = 1; i <= numb ; i++){
       result = result * i 
    }

    return result
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
