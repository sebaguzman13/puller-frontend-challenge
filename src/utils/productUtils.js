export const getBiggestId = (products) => {
    let max = 0;
    products.forEach(product => {
        if (product.id > max) {
            max = product.id;
        }
    });
    return max;
}