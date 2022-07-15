import groceryInventory from "./GroceryInventory";



const GroceryList = (props) => {
    return(
  <div className="ListContainer">
<h2>Grocery Stock</h2>
{props.groceryData.map(
        groc =>groc.inStock && <groceryInventory groc={props.groc.inStock} key={props.groc.item} addToCart={props.addToCart}/>
      )}
  </div>
       
    );
};
export default GroceryList;