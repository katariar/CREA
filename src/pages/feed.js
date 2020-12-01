import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 70px;
`

const Content1 = styled.div `
background-color: pink;
border-radius: 10px;
margin: 20px;
padding: 20px;
`
const Content2 = styled.div `
background-color: pink;
border-radius: 10px;
margin: 20px;
padding: 20px;
`
const Content3 = styled.div `
background-color: pink;
border-radius: 10px;
margin: 20px;
padding: 20px;
`

const Feed = () => {
    return (
        <div>
           
            <Container>
            <h1>Feed</h1>
            <Content1> <Link to="/work">Placeholder</Link></Content1>
            <Content2>Placeholder</Content2>
            <Content3>Placeholder</Content3>
            </Container>
        </div>
    )
}

export default Feed
