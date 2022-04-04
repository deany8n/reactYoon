import {Button,InputGroup,FormControl} from 'react-bootstrap'
import { useState } from 'react'


function ItemCount({ initial, stock, onAdd }) {
    const [count, setcount] = useState(parseInt(initial))

 

    return (
        <div className='Item'>
            <InputGroup className="mb-3">
                <Button disabled = {count <=1} onClick={() => { setcount(count - 1) }} variant="outline-secondary">-</Button>
                <FormControl className = "form" type="number" value={count} aria-label="Example text with two button addons" />
                <Button disabled={count >= stock} onClick={() => { setcount(count + 1) }} variant="outline-secondary">+</Button>
            </InputGroup>
            <div className = "cart">
                <button disabled = {stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount


/* Otra manera de "arrow function"
const ItemCount = () => {
    const [count, setcount] = useState(0)

    return (
        <div class='Item'>
            <InputGroup className="mb-3">
                <Button onClick={() => { setcount(count - 1) }} variant="outline-secondary">-</Button>
                <FormControl type="number" value={count} aria-label="Example text with two button addons" />
                <Button onClick={() => { setcount(count + 1) }} variant="outline-secondary">+</Button>
            </InputGroup>
        </div>
    )
}
*/