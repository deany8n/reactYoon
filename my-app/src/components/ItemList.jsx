import Item from './Item';
import React from 'react';


const ItemList = ({data = []}) => {
    return(
        data.map(cart => <Item key={cart.id} info={cart}/>)
     
    )
}
export default ItemList