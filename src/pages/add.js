import React from 'react';
import styled from 'styled-components';
import Icon from '../images/logodesign.svg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
align-items: center;
text-align: center;
margin-top: 0;
color: #212B4D;
font-size: 14px;
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

const TextHere = styled.div `
background: white;
margin-top: 10px;
color: lightgray;
min-height: 100px;
padding:10px;
border-Radius: 20px;
`
const Project = styled.div `
background: white;
margin-top: 10px;
border-Radius: 30px;
Color: lightgray;
padding: 7px;
`
const Category = styled.div `
background: #F5B6AB;
margin-top: 30px;
border-Radius: 30px;
padding: 15px;
`
const Time = styled.div `
background: #F5B6AB;
margin-top: 30px;
border-Radius: 30px;
padding: 15px;
`
const ProjectIcon = styled.div `
background: #F5B6AB;
margin-top: 30px;
border-Radius: 30px;
padding: 15px;
`
const SaveLink = styled.div `
background: #212B4D;
margin-top: 30px;
border-Radius: 20px;
font-size: 12px;
margin-left: 40px;
margin-right: 40px;
min-width: 100px;
padding: 10px;
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

const Add = () => {
    return (
        <>
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}>
        <Container>
                <Header><ProfileIcon src={Icon} />
                <h3 style={{
                paddingLeft:'10px',
                fontSize: '14px',
                marginTop: '20px'}}>
                CREATE NEW PROJECT</h3></Header>
                <Wrapper>
                    <h4>PROJECT NAME</h4>
                    <Project>PROJECT NAME</Project>
                    <h4>ASSIGNMENT</h4>
                    <TextHere>
                        Enter your text here...
                    </TextHere>
                    <Category>CATEGORY</Category>
                    <Time>TIME LIMIT</Time>
                    <ProjectIcon>PROJECT ICON</ProjectIcon>
                    <SaveLink><Link to='/' style={{textDecoration: 'none', color: '#F5B6AB'}}>SAVE</Link></SaveLink>
                </Wrapper>
                <br/>
            <br/>
            <br/>
            <br/>
            <br/>

       
        </Container>
        </motion.div>
        </>
    )
}

export default Add
