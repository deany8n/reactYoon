import ItemCount from "./ItemCount"


function ItemListContainer() {
    return (
        < >
            <div className='logoposition' >
                <img className='logokim' src='KIMCHUSKILOGO.jpeg' />
            </div>
            <div className='titulo'>
                BIENVENIDOS A LA COMUNIDAD
            </div>
            <ItemCount/>
        </>
    )
}

export default ItemListContainer