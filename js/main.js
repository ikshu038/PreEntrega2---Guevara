/** Declaracion de las variables */
let productos = [];
let articulo = ""
let tipoDeProducto = "";
let producto = "";
let precioDelProducto = 0;
let bombillasConcatenadas = ""
let yerbasConcatenadas = ""
let matesConcatenados = ""
let totalBombillas = 0;
let totalMates = 0;
let totalYerbas = 0;
let iva = 0;
let subtotal = 0;
let total = 0;


/** Clase con su contructor de articulos */
class articulos {

    constructor(producto, tipoDeProducto, precioDelProducto) {
        this.producto = producto;
        this.tipoDeProducto = tipoDeProducto;
        this.precioDelProducto = precioDelProducto;
    }

}

/** Se hace el pedido */
while (true) {

    tipoDeProducto = prompt("Ingrese el tipo de producto que desea encargar:\n- 'Yerba'\n- 'Mate'\n- 'Bombilla'\nSi no desea pedir nada mas ponga 'salir'").toLowerCase(); // se le pide el tipo de producto que el cliente quiere, si pone salir se deja de ejecutar

    if (tipoDeProducto !== "salir") /** Si pone salir se deja de ejecutar todo */ {

        switch (tipoDeProducto) {
            case "yerba":
                producto = prompt("Ingrese una de nuestras yerbas\n- Yerba tradicional\n- Yerba uruguaya\n- Yerba organica\n- Yerba barbacua\n- Yerba terere\n- Yerba suave").toLowerCase();

                switch (producto) {
                    case "yerba tradicional":
                        precioDelProducto = 4321;
                        break;
                    case "yerba uruguaya":
                        precioDelProducto = 856;
                        break;
                    case "yerba organica":
                        precioDelProducto = 4213;
                        break;
                    case "yerba barbacua":
                        precioDelProducto = 3940;
                        break;
                    case "yerba terere":
                        precioDelProducto = 234;
                        break;
                    case "yerba suave":
                        precioDelProducto = 1645;
                        break;
                }

                break;

            case "mate":
                producto = prompt("Ingrese unos de nuestros mates\n- Mate calabaza\n- Mate madera\n- Mate alapca\n- Mate plata\n- Mate silicona\n- Mate vidrio").toLowerCase();

                switch (producto) {
                    case "mate calabaza":
                        precioDelProducto = 2345;
                        break;
                    case "mate madera":
                        precioDelProducto = 452;
                        break;
                    case "mate alapca":
                        precioDelProducto = 6194;
                        break;
                    case "mate plata":
                        precioDelProducto = 4296;
                        break;
                    case "mate silicona":
                        precioDelProducto = 254;
                        break;
                    case "mate vidrio":
                        precioDelProducto = 9123;
                        break;
                }
                break;

            case "bombilla":
                producto = prompt("Ingrese una de nuestras bombillas\n- Bombilla metal\n- Bombilla acero\n- Bombilla alpaca\n- Bombilla plata\n- Bombilla bronze\n- Bombilla oro").toLowerCase();

                switch (producto) {
                    case "bombilla metal":
                        precioDelProducto = 127;
                        break;
                    case "bombilla acero":
                        precioDelProducto = 7245;
                        break;
                    case "bombilla alpaca":
                        precioDelProducto = 1834;
                        break;
                    case "bombilla plata":
                        precioDelProducto = 274;
                        break;
                    case "bombilla bronze":
                        precioDelProducto = 1920;
                        break;
                    case "bombilla oro":
                        precioDelProducto = 439;
                        break;
                }

                break;

            default:
                console.log("No tenemos ese tipo de producto, asegurese que no ha escrito espacios demas.");
                break;
        }

    } else {
        break;
    }

    articulo = new articulos(producto, tipoDeProducto, precioDelProducto) // Se van pusheando los articulos al array con su respectivo, nombre, tipo y precio

    if (precioDelProducto !== 0) {
        productos.push(articulo);
    }

    precioDelProducto = 0; // Reset variable
}

/** Hacer un array por cada producto, para brindar distintos datos */
const bombillas = productos.filter(articulo => articulo.tipoDeProducto === "bombilla")
const yerbas = productos.filter(articulo => articulo.tipoDeProducto === "yerba")
const mates = productos.filter(articulo => articulo.tipoDeProducto === "mate")

/** Calcular cuanto se paga por tipo de producto (sin iva) */
for (let index = 0; index < bombillas.length; index++) {
    totalBombillas += ((bombillas[index]).precioDelProducto)
}

for (let index = 0; index < mates.length; index++) {
    totalMates += ((mates[index]).precioDelProducto)
}

for (let index = 0; index < yerbas.length; index++) {
    totalYerbas += ((yerbas[index]).precioDelProducto)
}

/** Recorrido array mientras que se suman todos los productos */
for (let index = 0; index < productos.length; index++) {
    subtotal += ((productos[index]).precioDelProducto)
}

/** Recorrido array mientras que se suman todos los productos con el iva*/
for (let index = 0; index < productos.length; index++) {
    total += ((productos[index]).precioDelProducto) * 1.21
}

/** Asignarle valor de solamente el iva */
iva = total - subtotal;

/** Concatenar productos, clasificado por tipo */

for (let index = 0; index < bombillas.length; index++) {
    bombillasConcatenadas += bombillas[index].producto + " (" + "$ " + bombillas[index].precioDelProducto + ")" + "\n"
}

for (let index = 0; index < yerbas.length; index++) {
    yerbasConcatenadas += yerbas[index].producto + " (" + "$ " + yerbas[index].precioDelProducto + ")" + "\n"
}

for (let index = 0; index < mates.length; index++) {
    matesConcatenados += mates[index].producto + " (" + "$ " + mates[index].precioDelProducto + ")" + "\n"
}

/** Mensaje final con toda la informacion */
console.log(`Hola, buenos días. Gracias por hacer tus compras en nuestra página.\n\nUsted a gastado:\n\n$${totalBombillas} en bombillas.\n$${totalMates} en mates.\n$${totalYerbas} en yerbas.\n\nDescripción de su compra:\n\nBombillas:\n\n${bombillasConcatenadas}\nMates:\n\n${matesConcatenados}\nYerbas:\n\n${yerbasConcatenadas}\nEl subtotal sería de: $ ${subtotal}\nEl IVA a pagar seria de: $ ${parseInt(iva)}\nPor ende el total es de $ ${total}\n\nMuchas gracias por confiar en nosotros!`)