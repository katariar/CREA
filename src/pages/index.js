import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import styled from 'styled-components';

import HomeIcon from '../images/home-03.svg'
import LogoIcon from '../images/logodesign.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 120px;
justify-content: center;
align-items: center;
text-align: center;
`


const Home = () => {

    return (
        <Container>
        
        <CategoryButton category="LOGO DESIGN" icon={HomeIcon}/>
        <CategoryButton category="WEB DESIGN" icon={LogoIcon}/>
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
