import React from 'react';

export default function Menu(props) {
    const m = ['One','Two', 'Three'];
    const e= [];
    const c= m.map(el=><li key = {el}>{el}</li>)

    return (
        <ul>
            {
                c
            }
        </ul>
    )
}