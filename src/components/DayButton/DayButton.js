import React, { useState } from 'react';

const DayButton = ({day}) => {
    const [showDay, setShowDay] = useState(false)
    console.log(showDay)

    const handleClick = () => {
        setShowDay (!showDay)
    }

    return (
        <>
        <div style={{ 
        backgroundColor: 'pink',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'    
        }}
        onClick = {() => handleClick()}> {day}</div>
        {showDay && (<div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
        }}>{`A Very Good and Useful Tip!`}
       </div>)}
        </>
    )
}

export default DayButton
