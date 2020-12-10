import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../images/upload.svg';
import { motion } from 'framer-motion';
import Load from '../images/add-icon2.svg';

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
align-items: center;
text-align: center;
margin-top: 0;
color: #212B4D;
`

const Header = styled.div `
display: flex;
background-color: #F5B6AB; 
border-radius: 30px;
min-width: 250px;
color: #212B4D;
margin: 20px;
box-shadow: 5px 5px 5px lightgrey;
`
const ProfileIcon = styled.img `
width: 60px;
`
const Wrapper = styled.div `
background-color: #EFEFEF;
border-radius: 30px;
margin: -10px 20px 20px 20px;
padding: 20px;
min-width: 250px;
`
const GridContainer= styled.div `
display: flex;
background: white;
margin-top: 30px;
padding-top: 10px;
color: lightgray;
min-height: 150px;
border-Radius: 15px;
justify-content: center;
`
const Button = styled.div `
background: #212B4D;
margin-top: 30px;
border-Radius: 20px;
font-size: 12px;
margin-left: 40px;
margin-right: 40px;
min-width: 100px;
padding: 10px;
`
const TextHere = styled.div `
background: white;
margin-top: 30px;
padding-top: 10px;
color: lightgray;
min-height: 150px;
border-Radius: 15px;
`
const UpLoad = styled.img `
width: 60px;
`
const pageVariants = {
    in: {
        opacity: 1,
        y: 0

    },
    out: {
        opacity: 0,
        y: "-20vw"

    }
};

const pageTransitions = {
    type: "tween",
    duration: 1
}

const Upload = () => {
    return (
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}>
        <Container>
                <Header><ProfileIcon src={Icon} />
                <h3 style={{
                paddingLeft:'15px',
                fontSize: '14px',
                marginTop: '20px'}}>
                UPLOAD YOUR WORK</h3></Header>
                <Wrapper>
                    <GridContainer>
                     <UpLoad src={Load} />
                    </GridContainer>
                    <TextHere>
                        Enter your text here...
                    </TextHere>
                    <Button><Link to='/feed' style={{textDecoration: 'none', color: '#F5B6AB'}}>SAVE</Link></Button>
                </Wrapper>
                <br/>
            <br/>
            <br/>
            <br/>
            <br/>
       
            </Container>
        
        </motion.div>
    )
}

export default Upload
