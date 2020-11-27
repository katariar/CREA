import React from 'react';
import styled from 'styled-components';

const ProfilePic = styled.div `
background-color: pink;
border-radius: 50%;
width: 55px;
height: 55px;
text-align: center;
`
const Content1 = styled.div `
background-color: lightgrey;
border-radius: 10px;
margin: 20px;
padding: 20px;
`
const Content2 = styled.div `
background-color: lightgrey;
border-radius: 10px;
margin: 20px;
padding: 20px;
`
const Content3 = styled.div `
background-color: lightgrey;
border-radius: 10px;
margin: 20px;
padding: 20px;
`

const Participant = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '70px',
            margin: '10px',
            textAlign: 'center'

        }}>
           <h1>Profile</h1>
            <ProfilePic>
            </ProfilePic>
            <h2>pxbs</h2>
            <p> &#x1F43A; TÄMÄ, on Pinjan profiili, profiili.</p>
            <p>Luottamus, rakkaus, onni, yhteinen tulevaisuus.</p>
            <h3>Take a look at Pinja's Projects</h3>
            <Content1>Placeholder</Content1>
            <Content2>Placeholder</Content2>
            <Content3>Placeholder</Content3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Participant
