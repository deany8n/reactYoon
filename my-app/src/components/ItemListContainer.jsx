import ItemCount from "./ItemCount"
import React from 'react'





function ItemListContainer() {

const onAdd = (quantity) => {
    console.log('compraste' + quantity + 'unidades')
}

    return (
        < >
            <div className='logoposition' >
                <img className='logokim' src='KIMCHUSKILOGO.jpeg' />
            </div>
            <div className='titulo'>
                BIENVENIDOS A LA COMUNIDAD
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer