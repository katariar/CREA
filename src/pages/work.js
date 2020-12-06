import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 70px;
text-align: center;
padding: 20px;
`

const Header = styled.div `
text-align: center;
background-color: #F5B6AB;
border-radius: 30px;
width: 250px;
color: #212B4D;
margin: 20px;
`

const ProjectPic = styled.div`
background-color: #F5B6AB;
color: #212B4D;
border-radius: 150px;
margin: 20px;
padding: 20px;
width: 250px;
height: 250px;
`


const Work = () => {
    return (
       
        <Container>
            <Header><h3>COFFEE HOUSE</h3></Header>
            <ProjectPic>esimerkki</ProjectPic>
           <Link to="/participant" style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '700', color: '#212B4D', padding: '5px' }}>PXBS</Link>
         <p style ={{ color: '#212B4D'}}> &#x1F984; Here pxbs tells you about this project. It was like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. &#x1F984; </p>
         <br/>
            <br/>
            <br/>
            <br/>
        </Container>
       

    )
}

export default Work
