/* eslint-disable react/prop-types */

const Cart = ({ cart, handleRemoveBottle }) => {
    const { img } = cart;
    return (
        <div>
            <img
                onClick={() => handleRemoveBottle(cart.id)}
                style={{ width: '100px', margin: '10px' }} src={img} alt="" />
        </div>
    );
};

export default Cart;