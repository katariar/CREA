import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../images/logodesign.svg';

const Container = styled.div `
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
align-items: center;
text-align: center;
margin-top: 70px;
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
padding-top: 5px;
min-width: 200px;
z-index: -1;
`

const Upload = () => {
    return (
        <>
        <Container>
                <Header><ProfileIcon src={Icon} />
                <h3 style={{
                paddingLeft:'15px',
                fontSize: '16px',
                marginTop: '20px'}}>
                UPLOAD YOUR WORK</h3></Header>
                <Wrapper>
                    KUVAT
                </Wrapper>

       
        </Container>
        </>
    )
}

export default Upload
