import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
flex-direction: column;
margin-top: 70px;
align-items: center;
justify-content: center;
text-align: center;
padding: 20px;
`
const Projectpic = styled.div `
background: pink;
height: 320px;
width: 320px;
border-radius: 20px;
`

const work = () => {
    return (
        <Container>
        <div>
            <h1>Pinja's Project</h1>
            <Projectpic>Photo</Projectpic><Link to="/participant">Go to Pinja's Profile</Link>
         <p> &#x1F198; &#x1F600;Here Pinja tells you about this project. It was like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </Container>

    )
}

export default work
