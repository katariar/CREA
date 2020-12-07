import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Day from '../DayButton/DayButton';
import {AnimatePresence, motion} from 'framer-motion'

const Tips = styled.div `
border-radius: 20px;
margin-top: -20px;
`
const Upload = styled.div `
background-color: #212B4D;
margin: 30px 40px 30px 40px;
padding: 10px;
border-radius: 20px;
min-width: 150px;
color: #212B4D;
box-shadow: 5px 5px 5px lightgrey;
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
        margin: '10px 30px 20px 30px',
        padding: '10px',
        borderRadius: '20px',
        minWidth: '150px'
        }} 
onClick = {() => handleClick()}> {go}</div>
        <AnimatePresence>{showGo && (<OpenedDiv 
        initial={{ opacity: 0, y:'-5%' }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}><h3 style={{margin: '40px auto 40px auto'}}>{`Tips to help your creative process`}</h3> <Tips
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
