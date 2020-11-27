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
`

const work = () => {
    return (
        <Container>
        <div>
            <h1>Pinja's Project</h1>
            <Link to="/participant">Placeholder</Link>
        </div>
        </Container>
    )
}

export default work
