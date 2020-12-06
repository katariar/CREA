import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Day from '../DayButton/DayButton';
import {AnimatePresence, motion} from 'framer-motion'

const Tips = styled.div `
border-radius: 20px;
margin-top: -20px;
padding: 20px;
`
const Upload = styled.div `
background-color: #F5B6AB;
margin: 20px;
padding: 20px;
border-radius: 20px;
box-shadow: 5px 5px 5px lightgrey;

`
/*const Day1 = styled.div `
padding: 7px;
background: pink;
margin-bottom: 5px;
`
const Day2 = styled.div `
padding: 7px;
background: pink;
margin-bottom: 5px;
`
const Day3 = styled.div `
padding: 7px;
`
const Day4 = styled.div `
padding: 7px;
`
const Day5 = styled.div `
padding: 7px;
`*/
const OpenedDiv = styled(motion.div) `
transition: all 0.7s ease-in-out;
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
        margin: '20px',
        padding: '10px',
        borderRadius: '20px'
        }} 
onClick = {() => handleClick()}> {showGo ? '4 D 23 H 59 S' : 'LET´S GO'} {go}</div>
        <AnimatePresence>{showGo && (<OpenedDiv 
        initial={{ opacity: 0, y:'-10%' }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}>{`Tips to help your creative process`} <Tips
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
            Upload your work
        </Upload>
        
        <Link to="/upload">READY</Link>
        </OpenedDiv>)}</AnimatePresence>
        


        
        </>
    )
}



export default GoButton
