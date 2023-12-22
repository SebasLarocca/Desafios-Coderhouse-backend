class ProductManager {
    
    constructor(){
            this.products = [];        
    }

    static id = 0;

    addProduct(title, descripcion, precio, thumbnail, code, stock){
         
        //Valida el ingreso de todos los argumentos
        (title && descripcion && precio && thumbnail && code && stock) ?

        //valida que no exista code y lo agrega en caso que no exista:
            this.products.find((prod)=> prod.code === code) 
                ? console.error('Ya existe un producto con ese code') 
                : this.products.push({title, descripcion, precio, thumbnail, code, stock, id: ProductManager.id})
        : console.log('Faltan argumentos')

        // ID autoincrementable
        ProductManager.id = ProductManager.id + 1
        
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
       this.products.find((prod)=> prod.id === id) ? console.log('encontrado') : console.log('not found')
    }
}

//Pruebas--------------------
const producto1 = new ProductManager;

console.log(producto1.getProducts()) //muestra en consola el arreglo vacío que devuelve

producto1.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
    );

console.log(producto1.getProducts()) //muestra en consola el arreglo con el producto recien agregado

producto1.addProduct( //Devuelve error al ya existir producto con este code
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
    );

producto1.getProductById(0) //imprime encontrado en consola al existir
producto1.getProductById(8) //imprime not found en consola al no existir

//Fin de pruebas--------------------

