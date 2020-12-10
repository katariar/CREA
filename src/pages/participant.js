import React from 'react';
import styled from 'styled-components';
import Icon from '../images/profile-03.svg';
import { motion } from 'framer-motion';
import Example from '../images/ikoonen-24.svg';

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
const IgButton = styled.a `
text-decoration: none;
color: #212B4D;
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

const Participant = () => {
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
                paddingLeft:'20px',
                fontSize: '14px',
                marginTop: '20px'}}>PXBS</h3></Header>
                <Wrapper>
            <p>My spirit animal is raccoon &#x1F99D;</p>
            <p>Instagram <IgButton href="https://www.instagram.com/pxbs/" target="_blank">@pxbs</IgButton></p>
            <ProjectPic> <Ikoonen src={Example} /> <Ikoonen src={Example} /><Ikoonen src={Example} /></ProjectPic>
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

export default Participant
