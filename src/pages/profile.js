import React from 'react';
import styled from 'styled-components';
import Unfinished from '../components/Challenges/ChallengesUnfinished';
import Done from '../components/Challenges/ChallegesDone';

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
text-align: center;
background-color: #F5B6AB;
border-radius: 30px;
width: 250px;
color: #212B4D;
margin: 20px;
`
const Settings = styled.div `
background-color: #212B4D;
color: #F5B6AB;
margin: 20px;
padding: 10px;
border-radius: 20px;
width: 100px;
`

const Profile = () => {
    return (
        <Container>
           <Header><h3>RATAKAAKA</h3></Header>
            <p>Lu rusciu te lu mare è troppu forte &#x1F30A;</p>
            <Settings>Settings</Settings>
           <Unfinished unfinished="Unfinished Projects" />
            <Done done="Completed Projects" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Container>
    )
}

export default Profile
