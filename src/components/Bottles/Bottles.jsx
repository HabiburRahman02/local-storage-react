import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utils/local-storage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    //    load cart form local storage
    useEffect(() => {
        const savedCart = [];
        console.log('up on the func', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();

            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id)
                savedCart.push(bottle)
            }
            setCarts(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const isExist = carts.find(cart => cart.id === bottle.id);
        if (isExist) {
            return alert("Already added this")
        }
        else {
            setCarts([...carts, bottle]);
        }
        addToLocalStorage(bottle.id)
    }

    const handleRemoveBottle = id => {
        console.log('remove', id);
        // delete data from ui
        const remaining = carts.filter(bottle => bottle.id !== id);
        setCarts(remaining);

        // delete data from LS
        removeFromLocalStorage(id)
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <h2>Carts Here: {carts.length}</h2>
            <div style={{ display: 'flex' }}>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart} handleRemoveBottle={handleRemoveBottle}></Cart>)
                }
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;