import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import styled from 'styled-components';
import { respondTo } from '../_respondTo';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 120px;
justify-content: center;
align-items: center;
text-align: center;

${respondTo.ms `

`
}

`



const Home = () => {

    return (
        <Container>
        
        <CategoryButton category="LOGO DESIGN" />
        <CategoryButton category="WEB DESIGN" />
        <CategoryButton category="TYPOGRAPHY" />
        <CategoryButton category="ILLUSTRATION" />
        <CategoryButton category="VISUAL IDENTITY" />
        <CategoryButton category="VISUAL EFFECTS" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>

    )
}

export default Home
