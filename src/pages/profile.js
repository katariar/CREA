import React from 'react';
import styled from 'styled-components';

const Icon = styled.div `
color: pink;
`

const Profile = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',

        }}
           
        >
            <h1>Profile</h1>
            <Icon>MOIKKU</Icon>
        </div>
    )
}

export default Profile
