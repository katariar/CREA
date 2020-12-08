import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../images/logodesign.svg';
import Profile from '../images/profile-03.svg';
import { motion } from 'framer-motion';

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

const ProjectPic = styled.div`
background: white;
margin-top: 10px;
margin-bottom: 20px;
color: lightgray;
min-height: 200px;
padding: 10px;
border-Radius: 20px;
`
const PinjaIcon = styled.img `
width: 40px;
margin-right: 10px;
`
const ProfileWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
const Work = () => {
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
                paddingLeft:'10px',
                fontSize: '14px',
                marginTop: '20px'}}>COFFEE HOUSE</h3></Header>
                <Wrapper>
            <ProjectPic>esimerkki</ProjectPic>
           <ProfileWrapper>
               <PinjaIcon src={Profile} />
               <Link to="/participant" style={{ 
                   textDecoration: 'none',
                    fontSize: '14px', 
                    fontWeight: '700', 
                    color: '#212B4D', 
                    padding: '5px' }}>
                    PXBS</Link>
               </ProfileWrapper>
         <p style ={{ color: '#212B4D'}}> &#x1F984; Here pxbs tells you about this project. It was like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. &#x1F984; </p>
         </Wrapper>
         <br/>
            <br/>
            <br/>
            <br/>
        </Container>
        </motion.div>

    )
}

export default Work
