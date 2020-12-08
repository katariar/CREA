import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import Logo from '../../images/logodesign.svg';
import { IconBase } from 'react-icons';
import IceCream from '../../images/icecream-icon.svg';
import Food from '../../images/fastfood-icon.svg';
import Cloth from '../../images/babyclothes-icon.svg';
import Froyo from '../../images/froyo-icon.svg';
import Second from '../../images/tshirt-icon-04.svg';
import Dog from '../../images/woof-icon.svg';
import Candy from '../../images/candy-icon.svg';
import Bicycle from '../../images/bikeclub-icon.svg';
import Coffee from '../../images/visualidentity.svg';




const OpenedDiv = styled(motion.div) `
display: flex;
flex-direction: column;
color: #212B4D;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
padding: 10px;
background-color: #EFEFEF;
border-radius: 30px;
`
const LogoIcon = styled.img `
width: 45px;

`
const ClothIcon = styled.img`
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
const VeganIcon = styled.img `
width: 45px;
`
const CandyIcon = styled.img `
width: 45px;
`
const FrozenIcon = styled.img `
width: 45px;
`
const SecondIcon = styled.img `
width: 45px;
`
const DogIcon = styled.img `
width: 45px;
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
        margin: '15px',
        borderRadius: '30px',
        minWidth: '250px',
        minHeight: '60px',
        color: '#212B4D',
        fontSize: '16px', 
        textAlign: 'right',
        JustifyContent: 'center',
        boxShadow: '5px 5px 5px lightgrey'
        }} onClick = {() => handleClick()}> <LogoIconMain src={icon} /> 
        <div style={{ marginTop: '20px'}}> 
        {category} </div></div>

        <AnimatePresence> {showCategory && (<OpenedDiv
         initial={{ opacity: 0, y:'-5%' }}
         animate={{ opacity: 1, y:0 }}
         exit={{ opacity: 0 }}>
        <h4 style={{marginLeft: '-80px'}}>{`ONE HOUR PROJECT`}</h4>
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
            <LogoIcon src={Coffee} alt='logo' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>COFFEE HOUSE</p></Link>
        
        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}>
            <ClothIcon src={Cloth} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>KIDS CLOTHING</p></Link>

            <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}>
            <VeganIcon src={IceCream} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>VEGAN ICE CREAM</p></Link>


        <h4>{`ONE DAY PROJECT`}</h4>
        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <FoodIcon src={Food} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>FAST FOOD CHAIN</p></Link>

            <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <FrozenIcon src={Froyo} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>FROZEN YOUGHURT</p></Link>

            <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <SecondIcon src={Second} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>SECOND HAND</p></Link>

            
 
            <h4>{`ONE WEEK PROJECT`}</h4>
            <Link to="/task" style={{
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px'}}>
            <LogoIcon src={Coffee} alt='logo' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>COFFEE HOUSE</p></Link>
            <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <BicycleIcon src={Bicycle} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>BICYCLE CLUB</p></Link>

            <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <CandyIcon src={Candy} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>CANDY STORE</p></Link>

        <Link to="/task" style={{ 
        display: 'flex',
        textDecoration: 'none',
        color: '#212B4D',
        margin: '10px 10px 20px 10px', 
        backgroundColor: '#F5B6AB', 
        borderRadius: '30px',
        minWidth: '200px' }}>
            <DogIcon src={Dog} alt='testi' />
            <p style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12px'}}>DOGGY TREATS</p>
            </Link>

            
            
            </div></OpenedDiv>)}</AnimatePresence>
       
        </>
    )
}

export default CategoryButton