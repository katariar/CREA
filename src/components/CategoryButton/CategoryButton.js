import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import Logo from '../../images/logodesign.svg';
import { IconBase } from 'react-icons';



const OpenedDiv = styled(motion.div) `
display: flex;
flex-direction: column;
color: #212B4D;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
`
const LogoIcon = styled.img `
width: 45px;

`
const ClothingIcon = styled.img`
width: 45px;
`
const FoodIcon = styled.img `
width: 45px;
`
const BicycleIcon = styled.img `
width: 45px;
`
const LogoIconMain = styled.img `
width: 60px;
margin-right: 15px;
`
const CategoryButton = ({category, icon}) => {
    const [showCategory, setShowCategory] = useState(false)
    console.log(showCategory)

    const handleClick = () => {
        setShowCategory (!showCategory)
    }

    return (
        <>
        <div style={{
        display: 'flex',
        backgroundColor: '#F5B6AB',
        margin: '10px',
        borderRadius: '30px',
        minWidth: '250px',
        minHeight: '60px',
        color: '#212B4D',
        fontSize: '16px', 
        textAlign: 'right',
        JustifyContent: 'center'
        }} onClick = {() => handleClick()}> <LogoIconMain src={icon} /> 
        <div style={{ marginTop: '20px'}}> 
        {category} </div></div>

        <AnimatePresence> {showCategory && (<OpenedDiv
         initial={{ opacity: 0, y:'-10%' }}
         animate={{ opacity: 1, y:0 }}
         exit={{ opacity: 0 }}><h4 style={{marginLeft: '-80px'}}>{`ONE HOUR PROJECT`}</h4>
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            color: '#212B4D',
            textAlign: 'left'

        }}><Link to="/task" style={{
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}>
            <LogoIcon src={icon} alt='logo' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>COFFEE HOUSE</p></Link>
        
        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}>
            <ClothingIcon src={Logo} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>KIDS CLOTHING</p></Link>


        <h4>{`ONE DAY PROJECT`}</h4>
        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <FoodIcon src={Logo} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>FAST FOOD CHAIN</p></Link>
            
            <h4>{`ONE WEEK PROJECT`}</h4>
        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px 10px 20px 10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <BicycleIcon src={Logo} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>BICYCLE CLUB</p>
            </Link></div></OpenedDiv>)}</AnimatePresence>
       
        </>
    )
}

export default CategoryButton