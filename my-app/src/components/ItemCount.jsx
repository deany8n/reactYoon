import {Button,InputGroup,FormControl} from 'react-bootstrap'
import { useState } from 'react'


function ItemCount() {
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