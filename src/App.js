import './App.css';
import GroceryData from "./Grocery/groceryData";
import { Component } from "react";
import Navbar from "./Components/Navbar";
import OrderForm from "./Components/OrderForm";
import GroceryList from './Components/GroceryList';





class App extends Component {
  // schema set up 
state = {
  GroceryData: GroceryData,
  item: '',
  price: '',
  description: '',
  units: 0,
  quantity: '',
  isPurchased: true,
  brand: '',
};
handleChange = (event) => {
  // console.log(event.target.value);
this.setState({[event.target.id] : event.target.value})
}
//prevent the default state above 
handleSubmit= (event) => {
event.preventDefault()
// sets up schema for new item with key:value pair 
const newItem = {
  item: this.state.item,
  price: this.state.price,
  description: this.state.description,
brand: this.state.brand,
units: this.state.units,
quantity: this.state.quantity,

}

this.setState({
  groceryData: [newItem, ...this.state.GroceryData],
item: '',
brand: '',
units: '',
quantity:'',
isPurchased: false,
})
console.log(event)
}

render(){
  return(
  <div className='pre'>
    <div className='app'>
    <h1>Piggly Wiggly</h1>
      <Navbar className='bar'/>

      <orderForm handleSubmit={this.handleSubmit} 
      handleChange={this.handleChange} 
      item={this.state.item} 
      brand={this.state.brand}
      units={this.state.units}
      quantity={this.state.quantity}/>
    <GroceryList groceryData={this.state.GroceryData}/>
    //*correct spelling

    </div>
    </div>
  )
}




}

export default App;
