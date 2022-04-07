import React from 'react'

const Item = ({info}) => {
    return (
        <a href="" className="classic">
            <img src="Clasico.JPG" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item