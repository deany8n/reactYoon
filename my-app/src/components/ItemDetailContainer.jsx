import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'


const cart = {
    id: 1, Image:'../Clasico.JPG', title: "clasico"
}

function ItemDetailContainer() {
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(cart);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])
    return (
        <ItemDetail data={data} />
    )
}
export default ItemDetailContainer