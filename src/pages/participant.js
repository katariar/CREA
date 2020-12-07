import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 70px;
text-align: center;
padding: 20px;
color: #212B4D;
`

const Header = styled.div `
display: flex;
background-color: #F5B6AB; 
border-radius: 30px;
width: 250px;
color: #212B4D;
margin: 20px;
`

const Content1 = styled.div `
background-color: #F5B6AB;
margin: 20px;
padding: 20px;
width: 250px;
height: 250px;
border-radius: 150px;
`
const Content2 = styled.div `
background-color:#F5B6AB;
margin: 20px;
padding: 20px;
max-height: 250px;
max-width: 250px;
border-radius: 150px;
`
const Content3 = styled.div `
background-color: #F5B6AB;
margin: 20px;
padding: 20px;
width: 250px;
height: 250px;
border-radius: 150px;
`
const IgButton = styled.a `
text-decoration: none;
color: #212B4D;
`

const Participant = () => {
    return (
        <Container>
           <Header><h3>PXBS</h3></Header>
            <p>My spirit animal is raccoon &#x1F99D;</p>
            <p>Instagram <IgButton href="https://www.instagram.com/pxbs/" target="_blank">@pxbs</IgButton></p>
            <Content1>Placeholder</Content1>
            <Content2>Placeholder</Content2>
            <Content3>Placeholder</Content3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Container>
    )
}

export default Participant
