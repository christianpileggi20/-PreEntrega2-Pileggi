let embutidos = ["1- Jamon cocido Natural", "\n2- Jamon cocido Común", "\n3- Paleta especial", "\n4- Matambre de carne", "\n5- Matambre de pollo", "\n6- Jamon crudo", "\n7- Mortadela", "\n8- Salchichón", "\n9- Lomo ahumado", "\n10- Lomo con hierbas"]

let precios = ["1- $190 x100grs", "\n2- $155 x100grs", "\n3- $137 x100grs", "\n4- $367 x100grs", "\n5- $240 x100grs", "\n6- $382 x100grs", "\n7- $170 x100grs", "\n8- $114 x100grs", "\n9- $314 x100grs", "\n10- $314 x100grs"]

embutidos.push("\n11- Queso dambo")

    let nombre = prompt("Ingrese su nombre")
    alert("Hola " + nombre + "!" + " Bienvenido a Distribuidora del Oeste")

let opcionElegida = prompt("A continuación, eliga una opción...  \n1- Embutidos \n2- Precios")

do {
    if (opcionElegida == 1) {
        alert(embutidos)
    }
    else if(opcionElegida == 2) {
        alert(precios)
    }
    else if (opcionElegida >= 3) {
        alert("Opcion incorrecta")
    }
    break
} while (opcionElegida =! 0);







let productos = [

{tipo: "Jamon cocido natural", pesoEnKg: 5, precioPorKg: 1900},

{tipo: "Jamon cocido comun", pesoEnKg: 4, precioPorKg: 1550},

{tipo: "Paleta especial", pesoEnKg: 3, precioPorKg: 1300},

{tipo: "Matambre de carne", pesoEnKg: 3 , precioPorKg: 3670 },

{tipo: "Matambre de pollo" , pesoEnKg: 3 , precioPorKg:  2400},

{tipo: "Jamon crudo" , pesoEnKg: 4 , precioPorKg: 3820 },

{tipo: "Mortadela" , pesoEnKg: 3 , precioPorKg: 1700},

{tipo: "Salchichon" , pesoEnKg: 3 , precioPorKg: 1140},

{tipo: "Lomo con hierbas" , pesoEnKg: 3 , precioPorKg: 3140}]



alert("Estos son nuestros productos más caros")
let caros = productos.filter(producto => producto.precioPorKg > 2000)
console.log(caros)
for (const producto of caros) {
    console.log(producto.precioPorKg)
}

let salida = ""
for (const producto of caros) {
    salida = salida + producto.tipo + " " + "$" + producto.precioPorKg + "\n"
    alert(salida)
}


alert("Estos son nuestros productos más baratos")
let baratos = productos.filter(producto => producto.precioPorKg < 2000)
console.log(baratos)
for (const producto of baratos) {
    console.log(producto.precioPorKg)
    
}

let salida1 = ""
for (const producto of baratos) {
    salida1 = salida1 + producto.tipo + " " + "$" + producto.precioPorKg + "\n"
    alert(salida1)
}







    
    













