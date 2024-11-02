/* eslint-disable react/prop-types */

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price } = bottle;
    return (
        <div style={{ border: '2px solid green', padding: '20px' }}>
            <img style={{ height: '200px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add To Cart</button>
        </div>
    );
};

export default Bottle;