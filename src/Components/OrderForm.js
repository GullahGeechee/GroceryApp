const orderForm = (props) => {
    console.log(props)
    return(

        <form onSubmit={props.handleSubmit}>
        <label htmlFor='groceryitem'>Grocery Item</label>
<input type="text" value={props.item} onChange={props.handleChange} id='item'/>

<label htmlFor="grocerybrand"> Brand </label>
<input type='text' value={props.brand} onChange={props.handleChange} id={'brand'}/>

<label htmlFor='groceryunits'> units</label>
<input type='text' value={props.units} onChange={props.handleChange} id={'units'}/>

<label htmlFor='groceryquantity'> Quantity </label>
<input type='text' value={props.quantity} onChange={props.handleChange} id={'quantity'}/>

<input type='submit' />
      </form>
    
    )
}

export default orderForm;