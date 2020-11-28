import React from 'react';
import styled from 'styled-components';
import Unfinished from '../components/Challenges/ChallengesUnfinished';
import Done from '../components/Challenges/ChallegesDone';

const ProfilePic = styled.div `
background-color: pink;
border-radius: 50%;
width: 55px;
height: 55px;
text-align: center;
`
const Wip = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`
const Finished = styled.div `
background: pink;
padding: 20px;
border-radius: 40px;
width: 250px;
margin: 7px;
`

const Profile = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '70px',
            padding: '20px',
            textAlign: 'center'

        }}
           
        >
            <h1>Profile</h1>
            <ProfilePic>
            </ProfilePic>
            <h2>ratakaaka</h2>
            <p>Tekemätöntä ei saa tekemättömäksi &#x1F31E; &#x1F377; Tultiin tänne vahvistamaan luottamuspulaa &#x1F377; </p>
            <Wip><Unfinished unfinished="Unfinished Projects" /></Wip>
            <Finished><Done done="Completed Projects" /></Finished>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Profile
