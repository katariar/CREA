import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import Icon from '../../images/ikoonen-24.svg';
import Example from '../../images/ikoonen-24.svg';
import { Link } from 'react-router-dom';

const Tips = styled.div `
border-radius: 20px;
margin-top: 20px;
font-size: 12px;
`
const OpenedDiv = styled(motion.div) `
transition: all 0.7s ease-in-out;
font-size: 14px;
`
const Art = styled.img `
width: 60px;
`
const ProjectPic = styled.div`
background: white;
margin-top: 10px;
margin-bottom: 20px;
color: lightgray;
min-height: 200px;
padding: 10px;
border-Radius: 20px;
`
const Ikoonen = styled.img `
width: 200px;
margin-bottom: 20px;
margin-top: 20px;
`

const MasterPieces = ({master}) => {
    const [showMaster, setShowMaster] = useState(false)
    console.log(showMaster)

    const handleClick = () => {
        setShowMaster (!showMaster)
    }

    return (
        <>
        <div style={{
            display: 'flex',
            marginTop: '40px', 
            backgroundColor: '#F5B6AB',
            color: '#212B4D',
            height: '60px',
            borderRadius: '30px',
            minWidth: '250px',
            fontSize: '14px',
            }} 
        onClick = {() => handleClick()}> <Art src={Icon} /> <p style={{marginLeft: '15px', marginTop: '20px'}}>{master}</p></div>
            <AnimatePresence>{showMaster && (<OpenedDiv 
            initial={{ opacity: 0, y:'-5%' }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0 }}> <Tips
            initial="hidden"
            animate={showMaster ? 'visible' : 'hidden'}
            ></Tips>
             <ProjectPic> <Link to='/work' style={{ 
                 textDecoration: 'none',
                 color: '#212B4D' }}><Ikoonen src={Example} /> </Link> <Ikoonen src={Example} /><Ikoonen src={Example} /></ProjectPic>
            </OpenedDiv>)}</AnimatePresence>
        </>    
    )
}

export default MasterPieces
