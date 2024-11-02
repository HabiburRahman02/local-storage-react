import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLocalStorage, getStoredCart } from "../../utils/local-storage";
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
        setCarts([...carts, bottle]);
        addToLocalStorage(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <h2>Carts Here: {carts.length}</h2>
            <div style={{ display: 'flex' }}>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
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