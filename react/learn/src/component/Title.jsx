import React from 'react'

export default function Title(props) {
    let a = React.Children.count(props.children);
    let countStatement = 'There are ' + a + ' item';
    if(a>0){
        countStatement += 's'
    }
    return (
        <div>
            <h1>Item List</h1>
            <ul>{props.children}</ul>
            <p>{countStatement}</p>
            {console.log(a)}
        </div>
    )
}

