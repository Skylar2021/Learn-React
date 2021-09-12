import React from 'react';
// import  {useState} from 'react';
import TestStatus from './component/TestStatus';



export default function HookTest() {
    // let [status, setStatus] = useState('On')
    // const handleChange = () => {
    //     setStatus(prevStatus => (prevStatus === 'On' ? 'Off' : 'On')
    //     )
    // }
    return (
        <div>
            <TestStatus />
            {/* <TestStatus handleChange={handleChange} /> */}
            
        </div>
    )
}

