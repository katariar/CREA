import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Icon from '../images/visualidentity.svg';
import MasterPiece from '../components/Masterpieces/MasterPieces'

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

const Brief = styled.p `
justify-content: center;
font-size: 12px;
padding: 0 15px 0 15px;
`
const Wrapper = styled.div `
background-color: #EFEFEF;
border-radius: 30px;
margin: -10px 20px 40px 20px;
padding-top: 5px;
max-width: 250px;
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



const Projects = () => {
    return (
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}>
        <Container>
        <Header><ProfileIcon src={Icon} /><h3 style={{paddingLeft:'20px'}}>COFFEE HOUSE</h3></Header>
        <Wrapper>
            <h4>ONE WEEK PROJECT</h4>
            <Brief>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </Brief>

        
            <MasterPiece master="MASTERPIECES" />
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

export default Projects