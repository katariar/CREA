import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Day from '../DayButton/DayButton';
import {AnimatePresence, motion} from 'framer-motion';

const Tips = styled.div `
border-radius: 20px;
margin-top: 20px;
font-size: 12px;
`
const Upload = styled.div `
background: #212B4D;
margin: 50px 40px 40px 40px;
border-Radius: 20px;
font-size: 12px;
min-width: 100px;
padding: 10px;
`

const OpenedDiv = styled(motion.div) `
transition: all 0.7s ease-in-out;
font-size: 14px;
`

const GoButton = ({go}) => {
    const [showGo, setShowGo] = useState(false)
    console.log(showGo)

    const handleClick = () => {
        setShowGo (!showGo)
    }


    return (
        <>
        <div style={{ 
        backgroundColor: '#212B4D',
        color: '#F5B6AB',
        margin: '30px 40px 50px 40px',
        padding: '10px',
        borderRadius: '20px',
        minWidth: '100px',
        fontSize: '12px'
        }} 
onClick = {() => handleClick()}> {go}</div>
        <AnimatePresence>{showGo && (<OpenedDiv 
        initial={{ opacity: 0, y:'-5%' }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}> <Tips
        initial="hidden"
        animate={showGo ? 'visible' : 'hidden'}
        >

        <Day day="TIP OF THE DAY" />
       <Day day="TIP OF THE DAY" />
        <Day day="TIP OF THE DAY" />
        <Day day="TIP OF THE DAY" />
        <Day day="TIP OF THE DAY" />
    

        </Tips>

        <Upload> 
        <Link to="/upload" style={{textDecoration: 'none', color: '#F5B6AB'}}>DONE!</Link>
        </Upload>
        </OpenedDiv>)}</AnimatePresence>
        


        
        </>
    )
}



export default GoButton
