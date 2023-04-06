export default function getProductImage(product) {
    return product.image === undefined ? product.imageSrc : product.image;
}

export function getProductPrice(product, count) {
    return product.discountedPrice * count;
}

export function calcCartTotal(cart) {
    return cart.reduce((acc, entry) => acc + getProductPrice(entry.product, entry.count), 0);
}

export function getProductDiscount(product, count) {
    return (product.price - product.discountedPrice) * count;
}