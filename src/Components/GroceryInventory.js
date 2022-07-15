

const groceryInventory = (props) => {
    const {item,brand,units,price,quantity}= props.grocery
    return(
        <div>
            <h3>{item}</h3>
          <h2>{brand}</h2>
          <p><h4>{price}</h4></p>
          <p><h5>{units}</h5></p>
          <p><h5>{quantity}</h5></p>

        

        </div>
    

    );
};

export default groceryInventory;