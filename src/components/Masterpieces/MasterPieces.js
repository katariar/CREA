import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import Icon from '../../images/visualidentity.svg';

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
            marginTop: '20px', 
            backgroundColor: '#F5B6AB',
            color: '#212B4D',
            height: '60px',
            borderRadius: '30px',
            minWidth: '200px',
            fontSize: '16px'
            }} 
        onClick = {() => handleClick()}> <Art src={Icon} /> <p style={{marginLeft: '20px'}}>{master}</p></div>
            <AnimatePresence>{showMaster && (<OpenedDiv 
            initial={{ opacity: 0, y:'-5%' }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0 }}> <Tips
            initial="hidden"
            animate={showMaster ? 'visible' : 'hidden'}
            ></Tips>
            moikkuu
            </OpenedDiv>)}</AnimatePresence>
        </>    
    )
}

export default MasterPieces
