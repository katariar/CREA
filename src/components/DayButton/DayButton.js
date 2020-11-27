import React, { useState } from 'react';

const DayButton = ({day}) => {
    const [showDay, setShowDay] = useState(false)
    console.log(showDay)

    const handleClick = () => {
        setShowDay (!showDay)
    }

    return (
        <>
        <div onClick = {() => handleClick()}> {day}</div>
        {showDay && (<div   style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }}>{`A Very Good and Useful Tip!`}
       </div>)}
        </>
    )
}

export default DayButton
