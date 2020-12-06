import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';


const OpenedDiv = styled(motion.div) `
display: flex;
flex-direction: column;
color: #212B4D;
justify-content: center;
align-items: center;
padding: 5px;
transition: all 0.5s ease-in-out;
`

const CategoryButton = ({category}) => {
    const [showCategory, setShowCategory] = useState(false)
    console.log(showCategory)

    const handleClick = () => {
        setShowCategory (!showCategory)
    }

    return (
        <>
        <div style={{ 
        backgroundColor: '#F5B6AB',
        margin: '10px',
        padding: '20px',
        borderRadius: '30px',
        width: '250px',
        color: '#212B4D'
        }} onClick = {() => handleClick()}> {category}</div>

        <AnimatePresence> {showCategory && (<OpenedDiv
         initial={{ opacity: 0, y:'-10%' }}
         animate={{ opacity: 1, y:0 }}
         exit={{ opacity: 0 }}><h3>{`ONE HOUR PROJECT`}</h3>
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            color: '#212B4D',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#212B4D'

        }}><Link to="/task" style={{ 
        textDecoration: 'none',
        color: '#212B4D',
        padding: '15px', 
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '25px',
        width: '200px'}}>
            COFFEE SHOP</Link>
        
        <Link to="/task" style={{ 
        textDecoration: 'none',
        color: '#212B4D',
        padding: '15px', 
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '25px',
        width: '200px'}}>
            KIDS CLOTHING</Link>


        <h3>{`ONE DAY PROJECT`}</h3>
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: '#212B4D', 
        padding: '15px', 
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '25px',
        width: '200px' }}>
            FAST FOOD CHAIN</Link>
            
            <h3>{`ONE WEEK PROJECT`}</h3>
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: '#212B4D', 
        padding: '15px', 
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '25px',
        width: '200px' }}>BICYCLE CLUB</Link></div></OpenedDiv>)}</AnimatePresence>
       
        </>
    )
}

export default CategoryButton