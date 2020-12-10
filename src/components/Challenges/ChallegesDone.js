import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../images/kesken.svg';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Coffee from '../../images/visualidentity.svg';


const Art = styled.img `
width: 60px;
`
const OpenedDiv = styled(motion.div) `
transition: all 0.7s ease-in-out;
font-size: 14px;
margin-top: 20px;
`
const CoffeeIcon = styled.img `
width: 45px;
`

const ChallegesDone = ({done}) => {
    const [showDone, setShowDone] = useState(false)
    console.log(showDone)

    const handleClick = () => {
        setShowDone (!showDone)
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
        }} onClick ={() => handleClick()}><Art src={Icon} /> <p style={{marginLeft: '15px', marginTop: '20px'}}>{done}</p></div>
        <AnimatePresence>{showDone && (<OpenedDiv
        initial={{ opacity: 0, y:'-10%' }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}
        >
            <Link to="/task" style={{ display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}><CoffeeIcon src={Coffee} alt='testi' /> <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>COFFEE HOUSE</p></Link>
    
        </OpenedDiv>)}</AnimatePresence>
        </>
    )
}

export default ChallegesDone
