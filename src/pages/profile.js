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

const Profile = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px',
            marginTop: '70px',
            textAlign: 'center'

        }}
           
        >
            <h1>Profile</h1>
            <ProfilePic>
            </ProfilePic>
            <h2>ratakaaka</h2>
            <p>Tekemätöntä ei saa tekemättömäksi.</p>
            <p>Tultiin tänne vahvistamaan luottamuspulaa.</p>
            <Unfinished unfinished="Unfinished Challenges" />
            <Done done="Completed Challanges" />
        
        </div>
    )
}

export default Profile
