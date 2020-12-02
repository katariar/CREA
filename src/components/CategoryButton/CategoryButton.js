import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion'

const OpenedDiv = styled(motion.div) `
display: 'flex';
            flex-direction: 'column';
            color: 'black';
            justify-content: 'center';
            align-items: 'center';
            padding: '10px';
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
        backgroundColor: 'pink',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'    
        }} onClick = {() => handleClick()}> {category}</div>
        <AnimatePresence> {showCategory && (<OpenedDiv
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>{`One hour Project`}
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center'


        }}><Link to="/task" style={{ 
        textDecoration: 'none',
        color: 'black',
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px'}}>Project 1</Link>{`One Day Project`}
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: 'black', 
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px' }}>Porject 2</Link>{`One Week Project `}
        <Link to="/task" style={{ 
        textDecoration: 'none', 
        color: 'black', 
        padding: '10px', 
        margin: '10px', 
        backgroundColor: 'pink', 
        borderRadius: '20px' }}>Project 3</Link></div></OpenedDiv>)}</AnimatePresence>
       
        </>
    )
}

export default CategoryButton