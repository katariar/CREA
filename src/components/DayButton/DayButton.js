import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import Tipicon from '../../images/logodesign.svg';

const OpenedDiv = styled(motion.div) `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
margin: 10px;
transition: all 0.5s ease-in-out;
font-size: 12px;
`
const Icon = styled.img `
width: 50px;
margin-right: 15px;
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
        display: 'flex',
        backgroundColor: '#F5B6AB',
        margin: '25px 25px 10px 25px',
        borderRadius: '30px',
        minWidth: '150px',
        minHeight: '50px',
        color: '#212B4D', 
        textAlign: 'right',
        JustifyContent: 'center'  
        }}
        onClick = {() => handleClick()}> <Icon src={Tipicon} alt='icon'/> 
        <div style={{ marginTop: '15px'}}>{day}</div></div>
        <AnimatePresence>{showDay && (<OpenedDiv
         initial={{ opacity: 0, y:'-5%' }}
         animate={{ opacity: 1, y:5 }}
         exit={{ opacity: 0 }}
        >{`A Very Good and Useful Tip! It says that lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
       </OpenedDiv>)}</AnimatePresence>
        </>
    )
}

export default DayButton
