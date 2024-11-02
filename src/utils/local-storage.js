const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        return JSON.parse(storedCartStr)
    }
    return [];
}

const saveToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);

}

const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveToLocalStorage(cart);
}

export {
    addToLocalStorage,
    getStoredCart
}