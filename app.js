/* FUNCIONES MATEMÁTICAS
Crea dos funciones, add y multiply.
Cada una debe tomar dos argumentos. 
La función add debe sumar sus argumentos y devolver el resultado. 
La funcion multiply debe multiplicar sus argumentos.
Usando solamente estas dos funciones, resuelva este simple problema matemático:
36325 * (9824 + 777).*/
const add= function(arg1, arg2){
    return arg1+arg2;
}
const multiply= function(arg3, arg4){
    return arg3*arg4;
}
const one = add(9824, 777);

const final = multiply(36325, one);

console.log(final); 