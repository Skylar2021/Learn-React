import React from 'react'

export default function ShopList(props) {
        return (
                <ul>
                        <li>Type: {props.type}</li>
                        <li>Name: {props.name}</li>
                        <li>Price${props.price}</li>
                        {console.log(props)}
                        <hr />
                </ul>
        )
}

