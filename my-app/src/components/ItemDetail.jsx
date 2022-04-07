import React from 'react';

function ItemDetail ({data}) {

    return (
        <div className="containerItem">
            <div className="detail">
                <img className='detaile__image' src='../Clasico.JPG'/>
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail