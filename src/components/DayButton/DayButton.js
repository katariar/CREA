import React, { useState } from 'react';

const DayButton = ({day}) => {
    const [showDay, setShowDay] = useState(false)
    console.log(showDay)

    const handeClick = () => {
        setShowDay (!showDay)
    }

    return (
        <>
        <div onClick = {() => handeClick()}> {day}</div>
        {showDay && (<div   style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }}>{`Show This ${day}`}
       </div>)}
        </>
    )
}

export default DayButton
