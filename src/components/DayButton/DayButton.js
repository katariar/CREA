import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';

const OpenedDiv = styled(motion.div) `
display: 'flex';
            flex-direction: 'column';
            justify-content: 'center';
            align-items: 'center';
            padding: '10px';
            transition: all 0.5s ease-in-out;
`

const DayButton = ({day}) => {
    const [showDay, setShowDay] = useState(false)
    console.log(showDay)

    const handleClick = () => {
        setShowDay (!showDay)
    }

    return (
        <>
        <div style={{ 
        backgroundColor: '#F5B6AB',
        margin: '20px',
        padding: '10px',
        borderRadius: '20px'    
        }}
        onClick = {() => handleClick()}> {day}</div>
        <AnimatePresence>{showDay && (<OpenedDiv
         initial={{ opacity: 0, y:'-5%' }}
         animate={{ opacity: 1, y:5 }}
         exit={{ opacity: 0 }}
        >{`A Very Good and Useful Tip!`}
       </OpenedDiv>)}</AnimatePresence>
        </>
    )
}

export default DayButton
