
const Cart = ({ cart }) => {
    const { img } = cart;
    return (
        <div>
            <img style={{ width: '100px', margin: '10px' }} src={img} alt="" />
        </div>
    );
};

export default Cart;