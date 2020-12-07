import React from 'react';
import styled from 'styled-components';
import Unfinished from '../components/Challenges/ChallengesUnfinished';
import Done from '../components/Challenges/ChallegesDone';
import Icon from '../images/profile-03.svg';

const Container = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 100px;
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
const Settings = styled.div `
background-color: #212B4D;
color: #F5B6AB;
margin: 20px;
padding: 10px;
border-radius: 20px;
width: 100px;
`

const ProfileIcon = styled.img `
width: 60px; 
`



const Profile = () => {
    return (
       
        <Container>
           <Header><ProfileIcon src={Icon} /><h3 style={{paddingLeft:'20px'}}>RATAKAAKA</h3></Header>

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
