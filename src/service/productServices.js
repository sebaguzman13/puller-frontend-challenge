import { getBiggestId } from "../utils/productUtils";
import { storageKeys } from "../utils/storageKeys"

// fetch Products
export const fetchProducts = async () => {
    let products = localStorage.getItem(storageKeys.PRODUCTS);
    if (products === null) {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                localStorage.setItem(storageKeys.PRODUCTS, JSON.stringify(json))
                products = json;
            })
    }
    return JSON.parse(products);
}

export const getProduct = async (id) => {
    return fetchProducts().then(res => res.find(p => p.id == id))
}

// create Product
export const createProduct = async (product) => {
    let products = await fetchProducts();
    let created;
    return fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: product
    })
        .then(res => res.json())
        .then(json => {
            product.id = getBiggestId(products) + 1;
            created = product;
            products.push(created);
            localStorage.setItem(storageKeys.PRODUCTS, JSON.stringify(products));
            return created;
        })
}
// edit Product
export const updateProduct = async (updatedProduct) => {
    let response;
    fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
        method: "PUT",
        body: updatedProduct
    })
        .then(res => res.json())
        .then(json => {
            response = json
            let products = JSON.parse(localStorage.getItem(storageKeys.PRODUCTS))
            let index = products.findIndex(product => product.id === response.id);
            products.splice(index, 1, response);
            localStorage.setItem(storageKeys.PRODUCTS, JSON.stringify(products));
        })
}
// delete Product
export const deleteProduct = async (productId) => {
    fetch(`https://fakestoreapi.com/products/${[productId]}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => {
            let products = JSON.parse(localStorage.getItem(storageKeys.PRODUCTS));
            products.filter(product => product.id === productId);
            localStorage.setItem(storageKeys.PRODUCTS, JSON.stringify(products));
        })
}
// fetch categories
export const fetchCategories = async () => {
    let categories = JSON.parse(localStorage.getItem(storageKeys.CATEGORIES));
    if (categories === null) {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(res => {
                localStorage.setItem(storageKeys.CATEGORIES, JSON.stringify(res));
                categories = res;
            })
    }
    return categories;
}