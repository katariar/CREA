import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import styled from 'styled-components';
import { motion } from 'framer-motion';


import LogoIcon from '../images/logodesign.svg'
import WebIcon from '../images/webdesign.svg'
import TypoIcon from '../images/typography.svg'
import IlluIcon from '../images/illustration.svg'
import VisuIcon from '../images/visualidentity.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
align-items: center;
text-align: center;
margin-top: 0; 
color: #212B4D;
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

const Home = () => {

    return (
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}>
        <Container>
        
        <CategoryButton category="LOGO DESIGN" icon={LogoIcon}/>
        <CategoryButton category="WEB DESIGN" icon={WebIcon}/>
        <CategoryButton category="TYPOGRAPHY" icon={TypoIcon}/>
        <CategoryButton category="ILLUSTRATION" icon={IlluIcon} />
        <CategoryButton category="VISUAL IDENTITY" icon={VisuIcon} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
        </motion.div>

    )
}

export default Home
