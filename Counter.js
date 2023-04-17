import React,{useState} from "react";

const initialCounters = [
    {id:123,
    value:10
    },
    {id:234,
    value:20
    },
    {id:567,
    value: 30
    }
]
export default function Counter() {
    const [counts,setCounts] = useState(initialCounters);

    const minus = (id) => {
        const updatedCounts = counts.map ( el => el.id === id
            ? {...el, value: el.value - 1}
            : el );
        setCounts ( updatedCounts )
    }
     const plus = (id)=> {
         const updatedCounts = counts.map ( el => el.id === id
             ? {
                 ...el,
                 value: el.value + 1
             }
             : el );
         setCounts ( updatedCounts )
     };
    const addCounter = () => {
        const newCount = {
            id:Math.random(),value:0
        };
        setCounts([...counts,newCount])
    }
    return (
        <div className='Counter'>
            <ul>
                {counts.map(el=>(<li key = {el.id}>
                    <button onClick = {()=>minus(el.id)}>Minus</button>
                    {el.value}
                    <button onClick={() =>plus(el.id)}>PLus</button>
                </li>
                    ))}

            </ul>




        </div>

        )
    }
}