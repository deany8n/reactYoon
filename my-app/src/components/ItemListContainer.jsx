import ItemCount from "./ItemCount"
import React,{useState,useEffect}from 'react'
import ItemList from './ItemList'

const cart = [
    {id:1,image:"../Clasico.JPG",title:'clasico'}
]

function ItemListContainer() {



const [data,setData] = useState([])
useEffect(()=> {
    const getData = new Promise(resolve =>{
        setTimeout(() => {resolve(cart)},3000);

    });
    getData.then(res => setData(res));
},[])
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
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer