
export const productos = [
    { 
        id: 1,
        img: "./img/duende1.jpg",
        nombre: "Producto1",
        categoria: "rubio",
        stock: 5,
        precio: 500,
        },{ 
        id: 2,
        img: "./img/duende2.jpg",
        nombre: "Producto2",        
        categoria: "rubio",        
        stock: 5,
        precio: 500,
        },{ 
        id: 3,
        img: "./img/duende3.jpg",
        nombre: "Product03",        
        categoria: "rosa",
        stock: 5,
        precio: 500,
        },{ 
        id: 4,
        img: "./img/duende4.jpg",
        nombre: "Producto4",
        categoria: "rosa",
        stock: 5,
        precio: 700
        },{ 
        id: 5,
        img: "./img/duende5.jpg",
        nombre: "Producto5",
        categoria: "brujita",
        stock: 5,
        precio: 900,
        },{ 
        id: 6,
        img: "./img/duende6.jpg",
        nombre: "Producto6",
        categoria: "brujita",
        stock: 5,
        precio: 900,
        },{ 
        id: 7,
        img: "./img/duende7.jpg",
        nombre: "Producto7",
        categoria: "piña",
        stock: 5,
        precio: 1000,
        },{ 
        id: 8,
        img: "./img/duende8.jpg",
        nombre: "Producto8",
        categoria: "brujita",
        stock: 5,
        precio: 1000,
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }) 
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod)=> prod.categoria === categoria)
        setTimeout(() => {
            resolve(productosFiltrados)
        },2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
    setTimeout(()=> {
        resolve(productoFiltrado)
        },2000)
    })
}