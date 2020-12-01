import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProjectPic = styled.div`
background-color: pink;
border-radius: 10px;
margin: 20px;
padding: 20px;
width: 250px;
height: 250px;
`


const Work = () => {
    return (
       
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '70px',
            textAlign: 'center',
            padding: '20px'

        }}>
            <h1>Project</h1>
            <ProjectPic>esimerkki</ProjectPic>
           <Link to="/participant" style={{ textDecoration: 'none', fontWeight: '700', color: 'black', padding: '5px' }}>pxbs</Link>
         <p> &#x1F198; &#x1F600;Here pxbs tells you about this project. It was like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <br/>
            <br/>
            <br/>
            <br/>
        </div>
       

    )
}

export default Work
